const loginForm = document.forms[0];
// users = JSON.parse(localStorage.getItem('users'));


loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const login = loginForm.login.value;
  const password = loginForm.password.value;


  if (check(login, password)) {
    goIn();
  } else {
    complaint('Invalid login or password');
  }
});

loginForm.cancel.addEventListener('click', () => {
  goOut();
});

function goOut() {
  location.href = '/lobby.html';
}

function goIn() {
  location.href = '/profile.html';
}

function check(login, password) {
  return users.some(user => user.login === login && user.password === password);
}

function complaint(message) { 
  alert(message) 
}
