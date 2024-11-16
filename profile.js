const logOutBtn = document.getElementsByTagName('button')[0];

logOutBtn.addEventListener('click', goOut);

function goOut() {
  location.href = '/lobby.html';
}
