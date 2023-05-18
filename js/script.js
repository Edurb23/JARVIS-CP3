const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const elementsToToggle = document.getElementsByClassName('box');

darkModeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  for (let i = 0; i < elementsToToggle.length; i++) {
    elementsToToggle[i].classList.toggle('dark-mode');
  }
});
