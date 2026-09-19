<?php
/**
 * Admin-session helpers for the CMS. Sessions are started in bootstrap.php;
 * this just checks/sets the login flag and gives a consistent 401 for the
 * admin-only API endpoints.
 */

function cms_is_logged_in(): bool {
    return !empty($_SESSION['cms_admin']) && $_SESSION['cms_admin'] === true;
}

function cms_require_login(): void {
    if (!cms_is_logged_in()) {
        http_response_code(401);
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Not authenticated.']);
        exit;
    }
}

function cms_attempt_login(string $username, string $password): bool {
    $expectedUser = cms_config('admin_username');
    $expectedHash = cms_config('admin_password_hash');

    if (!hash_equals((string) $expectedUser, $username)) {
        return false;
    }
    if (!password_verify($password, (string) $expectedHash)) {
        return false;
    }

    session_regenerate_id(true);
    $_SESSION['cms_admin'] = true;
    $_SESSION['cms_admin_user'] = $username;
    return true;
}

function cms_logout(): void {
    $_SESSION = [];
    session_destroy();
}

/** Reads and decodes a JSON request body into an assoc array. */
function cms_read_json_body(): array {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}
