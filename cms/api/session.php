<?php
/**
 * GET /cms/api/session.php — lets the admin UI check if it's still logged in.
 */
require __DIR__ . '/../includes/bootstrap.php';
require __DIR__ . '/../includes/cors.php';
require __DIR__ . '/../includes/auth.php';

cms_apply_cors();
header('Content-Type: application/json');
echo json_encode([
    'loggedIn' => cms_is_logged_in(),
    'username' => $_SESSION['cms_admin_user'] ?? null,
]);
