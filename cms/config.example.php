<?php
/**
 * CMS configuration.
 * Copy this file to config.php, fill in real values, then set a strong
 * admin password (see generate-password-hash.php) before deploying.
 * config.php itself is gitignored and must never be committed.
 */
return [
    // Login username for the admin panel.
    'admin_username' => 'admin',

    // Generate with: php generate-password-hash.php "your-new-password"
    'admin_password_hash' => '$2y$10$CHANGE.ME.CHANGE.ME.CHANGE.ME.CHANGE.ME.CHANGE.ME.CH',

    // Session cookie name used for the admin panel.
    'session_name' => 'cmp_admin_session',

    // Origins allowed to call the public API from the browser (Next.js dev
    // server + the production domain). Add/remove as needed.
    'allowed_origins' => [
        'http://localhost:3000',
        'https://carmechanicperth.com.au',
        'https://www.carmechanicperth.com.au',
    ],

    // Where booking notification emails are sent. Leave empty to disable
    // email sending (submissions are still saved to data/bookings.json).
    'booking_notify_email' => 'cmechanicperth@gmail.com',
    'mail_from' => 'noreply@carmechanicperth.com.au',
];
