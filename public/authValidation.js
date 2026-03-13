document.getElementById('authForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  // Helpers
  const showErr = (input, errEl) => {
    valid = false;
    errEl.classList.remove('hidden');
    input.classList.remove('border-green-500');
    input.classList.add('border-red-500');
  };

  const showOk = (input, errEl) => {
    errEl.classList.add('hidden');
    input.classList.remove('border-red-500');
    input.classList.add('border-green-500');
  };

  // Username: 3–20 chars (letters, numbers, underscores, dots allowed)
  const username = document.getElementById('username');
  const username_error = document.getElementById('username_error');
  const usernameVal = username.value.trim();
  const usernameOk = /^[a-zA-Z0-9._]{3,20}$/.test(usernameVal);
  if (!usernameOk) {
    showErr(username, username_error);
  } else {
    showOk(username, username_error);
  }

  // Email: basic pattern
  const email = document.getElementById('email');
  const email_error = document.getElementById('email_error');
  const emailVal = email.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
  if (!emailOk) {
    showErr(email, email_error);
  } else {
    showOk(email, email_error);
  }

  // Password: at least 8 chars, at least 1 letter & 1 number
  const password = document.getElementById('password');
  const password_error = document.getElementById('password_error');
  const pwVal = password.value;
  const pwOk = /[A-Za-z]/.test(pwVal) && /\d/.test(pwVal) && pwVal.length >= 8;
  if (!pwOk) {
    showErr(password, password_error);
  } else {
    showOk(password, password_error);
  }

  // If all good, submit the real form
  if (valid) {
    // Optional: disable button to prevent double submits
    const btn = this.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.classList.add('opacity-70', 'cursor-not-allowed');
    }
    this.submit();
  }
});