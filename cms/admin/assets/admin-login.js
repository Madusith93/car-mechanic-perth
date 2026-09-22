(function () {
  var form = document.getElementById('login-form');
  var errorBox = document.getElementById('login-error');
  var passwordInput = document.getElementById('password-input');
  var toggleBtn = document.getElementById('toggle-password');
  var eyeOpen = document.getElementById('eye-open');
  var eyeClosed = document.getElementById('eye-closed');

  toggleBtn.addEventListener('click', function () {
    var isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    eyeOpen.classList.toggle('icon-hidden', isHidden);
    eyeClosed.classList.toggle('icon-hidden', !isHidden);
    toggleBtn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorBox.hidden = true;

    var username = form.username.value.trim();
    var password = passwordInput.value;

    fetch('../api/login.php', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then(function (res) { return res.json().then(function (body) { return { ok: res.ok, body: body }; }); })
      .then(function (result) {
        if (!result.ok) {
          throw new Error(result.body.error || 'Login failed.');
        }
        window.location.href = 'dashboard.php';
      })
      .catch(function (err) {
        errorBox.textContent = err.message;
        errorBox.hidden = false;
      });
  });
})();