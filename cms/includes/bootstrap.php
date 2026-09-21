<?php
/**
 * Shared bootstrap: loads config, starts the admin session, sets error
 * handling. Every api/*.php entry point requires this first.
 */

error_reporting(E_ALL);
ini_set('display_errors', '0'); // never leak PHP errors into JSON responses

define('CMS_ROOT', dirname(__DIR__));
define('CMS_DATA_DIR', CMS_ROOT . '/data');

$configFile = CMS_ROOT . '/config.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Missing config.php. Copy config.example.php to config.php first.']);
    exit;
}

$GLOBALS['cms_config'] = require $configFile;

function cms_config(string $key, $default = null) {
    return $GLOBALS['cms_config'][$key] ?? $default;
}

session_name(cms_config('session_name', 'cmp_admin_session'));
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'httponly' => true,
    'samesite' => 'Lax',
]);
session_start();
