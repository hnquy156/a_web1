const password = document.getElementById('password');
const confirmPassword = document.getElementById('password_confirm');

const checkPassword = () => {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('Passwords must match');
  } else {
    confirmPassword.setCustomValidity('');
  }
};

password.onchange = checkPassword;
confirmPassword.onchange = checkPassword;
