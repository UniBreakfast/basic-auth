const loginForm = document.forms[0];


loginForm.addEventListener('submit', handleSubmit);

loginForm.cancel.addEventListener('click', goOut);

function handleSubmit(e) {
  e.preventDefault();

  const { login, password } = getFormData()

  if (check(login, password)) {
    goIn();
  } else {
    complaint('Incorrect login or password');
  }
}

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
