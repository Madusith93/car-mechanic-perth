<?php
/**
 * GET /cms/api/content.php
 * Public, read-only. Returns every content section in one payload so the
 * Next.js frontend can fetch it in a single request at runtime.
 */
require __DIR__ . '/../includes/bootstrap.php';
require __DIR__ . '/../includes/cors.php';
require __DIR__ . '/../includes/json-store.php';

cms_apply_cors();
header('Content-Type: application/json');
header('Cache-Control: no-store');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

echo json_encode(cms_read_all_sections(), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
