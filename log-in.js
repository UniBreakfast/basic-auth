const loginForm = document.forms[0];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  location.href = '/profile.html';
});

loginForm.cancel.addEventListener('click', () => {
  location.href = '/lobby.html';
});
