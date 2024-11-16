const loginForm = document.forms[0];


loginForm.addEventListener('submit', handleSubmit);

loginForm.cancel.addEventListener('click', goOut);

function handleSubmit(e) {
  e.preventDefault();

  const { login, password } = getFormData()

  if (check(login, password)) {
    goIn(login);
  } else {
    complaint('Incorrect login or password');
  }
}

function getFormData() {
  return {
    login: loginForm.login.value,
    password: loginForm.password.value
  }
}

function goOut() {
  location.href = '/lobby.html';
}

function goIn(userName) {
  location.href = '/profile.html?user=' + userName;
}

function check(login, password) {
  return users.some(user => user.login === login && user.password === password);
}

function complaint(message) { 
  alert(message) 
}
