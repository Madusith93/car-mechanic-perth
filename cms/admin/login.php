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
      <input type="password" name="password" autocomplete="current-password" required>
    </label>
    <button type="submit">Log In</button>
  </form>
  <script src="assets/admin-login.js"></script>
</body>
</html>
