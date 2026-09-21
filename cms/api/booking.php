<?php
/**
 * /cms/api/booking.php
 *   POST (public) — submit a booking request from the site's booking form.
 *   GET  (admin)  — list all booking submissions, newest first.
 *   PATCH (admin) — { "id": "...", "status": "contacted"|"completed"|"new" }
 */
require __DIR__ . '/../includes/bootstrap.php';
require __DIR__ . '/../includes/cors.php';
require __DIR__ . '/../includes/auth.php';
require __DIR__ . '/../includes/json-store.php';

cms_apply_cors();
header('Content-Type: application/json');

$bookingsPath = CMS_DATA_DIR . '/bookings.json';
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'POST') {
    $body = cms_read_json_body();

    $fullName = trim((string) ($body['fullName'] ?? ''));
    $phone = trim((string) ($body['phone'] ?? ''));
    $email = trim((string) ($body['email'] ?? ''));
    $vehicle = trim((string) ($body['vehicle'] ?? ''));
    $service = trim((string) ($body['service'] ?? ''));
    $preferredDate = trim((string) ($body['preferredDate'] ?? ''));
    $issue = trim((string) ($body['issue'] ?? ''));

    if ($fullName === '' || $phone === '' || $service === '') {
        http_response_code(400);
        echo json_encode(['error' => 'Full name, phone and service are required.']);
        exit;
    }
    if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'That email address doesn\'t look valid.']);
        exit;
    }

    $entry = [
        'id' => bin2hex(random_bytes(8)),
        'fullName' => $fullName,
        'phone' => $phone,
        'email' => $email,
        'vehicle' => $vehicle,
        'service' => $service,
        'preferredDate' => $preferredDate,
        'issue' => $issue,
        'status' => 'new',
        'createdAt' => gmdate('c'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? null,
    ];

    $bookings = cms_read_json_file($bookingsPath, []);
    array_unshift($bookings, $entry);
    if (!cms_write_json_file($bookingsPath, $bookings)) {
        http_response_code(500);
        echo json_encode(['error' => 'Could not save your booking. Please call us instead.']);
        exit;
    }

    cms_notify_booking($entry);

    echo json_encode(['success' => true]);
    exit;
}

if ($method === 'GET') {
    cms_require_login();
    $bookings = cms_read_json_file($bookingsPath, []);
    echo json_encode(['bookings' => $bookings]);
    exit;
}

if ($method === 'PATCH') {
    cms_require_login();
    $body = cms_read_json_body();
    $id = (string) ($body['id'] ?? '');
    $status = (string) ($body['status'] ?? '');
    $allowedStatuses = ['new', 'contacted', 'completed'];

    if ($id === '' || !in_array($status, $allowedStatuses, true)) {
        http_response_code(400);
        echo json_encode(['error' => 'A valid "id" and "status" are required.']);
        exit;
    }

    $bookings = cms_read_json_file($bookingsPath, []);
    $found = false;
    foreach ($bookings as &$b) {
        if (($b['id'] ?? '') === $id) {
            $b['status'] = $status;
            $found = true;
            break;
        }
    }
    unset($b);

    if (!$found) {
        http_response_code(404);
        echo json_encode(['error' => 'Booking not found.']);
        exit;
    }

    cms_write_json_file($bookingsPath, $bookings);
    echo json_encode(['success' => true]);
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed.']);

/** Best-effort email notification; failure here never blocks the booking save. */
function cms_notify_booking(array $entry): void {
    $to = cms_config('booking_notify_email', '');
    if ($to === '') {
        return;
    }
    $from = cms_config('mail_from', 'noreply@localhost');
    $subject = 'New booking request: ' . $entry['fullName'];
    $lines = [
        'New booking request from the website:',
        '',
        'Name: ' . $entry['fullName'],
        'Phone: ' . $entry['phone'],
        'Email: ' . ($entry['email'] ?: '(not provided)'),
        'Vehicle: ' . ($entry['vehicle'] ?: '(not provided)'),
        'Service: ' . $entry['service'],
        'Preferred date: ' . ($entry['preferredDate'] ?: '(not provided)'),
        'Issue: ' . ($entry['issue'] ?: '(not provided)'),
    ];
    $headers = 'From: ' . $from . "\r\n" . 'Content-Type: text/plain; charset=UTF-8';
    @mail($to, $subject, implode("\n", $lines), $headers);
}
