<?php
/**
 * CORS handling for the public/admin JSON API. Reflects the request Origin
 * only if it's on the configured allow-list, and answers preflight OPTIONS
 * requests immediately.
 */

function cms_apply_cors(): void {
    $allowed = cms_config('allowed_origins', []);
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if ($origin !== '' && in_array($origin, $allowed, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Vary: Origin');
        header('Access-Control-Allow-Credentials: true');
    }
    header('Access-Control-Allow-Methods: GET, POST, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');

    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}
