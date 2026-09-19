<?php
/**
 * CLI helper: php generate-password-hash.php "your-new-password"
 * Paste the output into config.php as 'admin_password_hash'.
 */
if (php_sapi_name() !== 'cli') {
    http_response_code(403);
    exit('CLI only.');
}
$password = $argv[1] ?? null;
if (!$password) {
    fwrite(STDERR, "Usage: php generate-password-hash.php \"your-new-password\"\n");
    exit(1);
}
echo password_hash($password, PASSWORD_DEFAULT) . "\n";
