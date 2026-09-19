<?php
/**
 * POST /cms/api/logout.php — ends the admin session.
 */
require __DIR__ . '/../includes/bootstrap.php';
require __DIR__ . '/../includes/cors.php';
require __DIR__ . '/../includes/auth.php';

cms_apply_cors();
header('Content-Type: application/json');
cms_logout();
echo json_encode(['success' => true]);
