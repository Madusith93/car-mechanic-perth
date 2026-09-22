<?php
require __DIR__ . '/../includes/bootstrap.php';
require __DIR__ . '/../includes/auth.php';

if (cms_is_logged_in()) {
    header('Location: dashboard.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Car Mechanic Perth — Admin Login</title>
<link rel="stylesheet" href="assets/admin.css">
<link rel="icon" type="image/x-icon" href="assets/favicon.ico">
</head>
<body class="login-page">
  <form id="login-form" class="login-card">
    <h1>Car Mechanic Perth</h1>
    <p class="subtitle">CMS Admin Login</p>
    <div id="login-error" class="error" hidden></div>
    <label>Username
      <input type="text" name="username" autocomplete="username" required>
    </label>
    <label>Password
      <div class="password-field">
        <input type="password" name="password" id="password-input" autocomplete="current-password" required>
        <button type="button" id="toggle-password" class="password-toggle" aria-label="Show password">
          <svg id="eye-open" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle cx="12" cy="12" r="3"/></svg>
          <svg id="eye-closed" class="icon-hidden" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.62 21.62 0 0 1 5.06-6.06M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.6 21.6 0 0 1-2.94 4.24M14.12 14.12a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
        </button>
      </div>
    </label>
    <button type="submit">Log In</button>
  </form>
  <script src="assets/admin-login.js"></script>
</body>
</html>