const regForm = document.forms[0];

regForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('successfully registered. Now login!');
   location.href = '/log-in.html';
});

regForm.cancel.addEventListener('click', () => {
  location.href = '/lobby.html';
});
