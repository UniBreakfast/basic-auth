const regForm = document.forms[0];


function makePassword() {
  const login = regForm.login.value;
  const password = regForm.password.value;
  const confirm = regForm.confirm.value;

  if (password === confirm && password.length >= 8) {
    users.push({ login, password })
    saveUsers();
    alert('Registration successful, now you can login');
    regForm.reset();
    location.href = '/log-in.html';
        console.log(users);

  } else {
    regForm.reset();
    alert('Passwords do not match');
  }


}

regForm.addEventListener('submit', (e) => {
  e.preventDefault();

  makePassword();
});

regForm.cancel.addEventListener('click', () => {
  location.href = '/lobby.html';
});
