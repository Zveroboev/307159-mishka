var closeModalButton = document.querySelector('.modal__form-send');
var modalWindow = document.getElementById('modal');

closeModalButton.addEventListener('click', closeModal);
modalWindow.addEventListener('click', closeModal);


if (location.pathname === '/catalog.html'){


} else if (location.pathname === '/index.html') {
  var openModalButton = document.getElementById('openModal');

  openModalButton.setAttribute('href', '#');
  openModalButton.removeAttribute('target');

  openModalButton.addEventListener('click', openModal);
}

function openModal() {
  var modalWindow = document.getElementById('modal');

  modalWindow.classList.remove('modal--closed');
}

function closeModal() {
  var modalWindow = document.getElementById('modal');

  modalWindow.classList.add('modal--closed');
}
