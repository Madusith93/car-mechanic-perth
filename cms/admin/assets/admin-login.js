(function () {
  var form = document.getElementById('login-form');
  var errorBox = document.getElementById('login-error');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorBox.hidden = true;

    var username = form.username.value.trim();
    var password = form.password.value;

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
