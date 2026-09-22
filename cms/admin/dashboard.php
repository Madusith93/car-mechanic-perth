<?php
require __DIR__ . '/../includes/bootstrap.php';
require __DIR__ . '/../includes/auth.php';

if (!cms_is_logged_in()) {
    header('Location: login.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Car Mechanic Perth — CMS</title>
<link rel="stylesheet" href="assets/admin.css">
<link rel="icon" type="image/x-icon" href="assets/favicon.ico">
</head>
<body>
  <header class="topbar">
    <div class="brand">Car Mechanic Perth <span>CMS</span></div>
    <button id="logout-btn" class="link-btn">Log Out</button>
  </header>

  <div class="layout">
    <nav class="tabs" id="tabs">
      <button data-tab="site" class="tab active">Business Info</button>
      <button data-tab="hero" class="tab">Hero</button>
      <button data-tab="services" class="tab">Services</button>
      <button data-tab="why-us" class="tab">Why Choose Us</button>
      <button data-tab="areas" class="tab">Service Areas</button>
      <button data-tab="reviews" class="tab">Reviews</button>
      <button data-tab="footer" class="tab">Footer</button>
      <button data-tab="booking" class="tab">Booking Options</button>
      <button data-tab="bookings" class="tab">Bookings Inbox</button>
    </nav>

    <main class="panel">
      <div id="status" class="status" hidden></div>
      <div id="panel-content">Loading…</div>
    </main>
  </div>

  <script src="assets/admin.js"></script>
</body>
</html>
