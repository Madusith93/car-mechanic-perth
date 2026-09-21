<?php
/**
 * Active CMS configuration — DO NOT COMMIT (see .gitignore).
 *
 * IMPORTANT: 'admin_password_hash' below is a NON-FUNCTIONAL placeholder
 * (not a real bcrypt hash), so login will fail until you replace it. Run:
 *   php generate-password-hash.php "your-new-password"
 * and paste the output in below before using the admin panel.
 */
return [
    'admin_username' => 'admin',

    // PLACEHOLDER — replace with real output from generate-password-hash.php
    'admin_password_hash' => 'REPLACE_WITH_OUTPUT_OF_generate-password-hash.php',

    'session_name' => 'cmp_admin_session',

    'allowed_origins' => [
        'http://localhost:3000',
        'https://carmechanicperth.com.au',
        'https://www.carmechanicperth.com.au',
    ],

    'booking_notify_email' => 'cmechanicperth@gmail.com',
    'mail_from' => 'noreply@carmechanicperth.com.au',
];
