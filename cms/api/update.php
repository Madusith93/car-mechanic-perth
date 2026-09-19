<?php
/**
 * POST /cms/api/update.php  { "section": "hero", "data": { ... } }
 * Admin-only. Overwrites one content section's JSON file. The whole
 * section object is expected (not a partial patch) so the shape stays
 * predictable for the frontend.
 */
require __DIR__ . '/../includes/bootstrap.php';
require __DIR__ . '/../includes/cors.php';
require __DIR__ . '/../includes/auth.php';
require __DIR__ . '/../includes/json-store.php';

cms_apply_cors();
header('Content-Type: application/json');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

cms_require_login();

$body = cms_read_json_body();
$section = (string) ($body['section'] ?? '');
$data = $body['data'] ?? null;

if ($section === '' || $data === null || !is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Both "section" and an object "data" are required.']);
    exit;
}

if (cms_section_path($section) === null) {
    http_response_code(400);
    echo json_encode(['error' => 'Unknown section: ' . $section]);
    exit;
}

if (!cms_write_section($section, $data)) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save. Check file permissions on cms/data/.']);
    exit;
}

echo json_encode(['success' => true, 'section' => $section, 'data' => cms_read_section($section)]);
