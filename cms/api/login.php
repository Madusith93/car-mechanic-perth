<?php
/**
 * POST /cms/api/login.php  { "username": "...", "password": "..." }
 * Starts an admin session on success.
 */
require __DIR__ . '/../includes/bootstrap.php';
require __DIR__ . '/../includes/cors.php';
require __DIR__ . '/../includes/auth.php';

cms_apply_cors();
header('Content-Type: application/json');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

$body = cms_read_json_body();
$username = trim((string) ($body['username'] ?? ''));
$password = (string) ($body['password'] ?? '');

if ($username === '' || $password === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Username and password are required.']);
    exit;
}

// Basic throttle: small sleep on every attempt to slow down brute force.
usleep(300000);

if (!cms_attempt_login($username, $password)) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid username or password.']);
    exit;
}

echo json_encode(['success' => true]);
