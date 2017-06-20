var closeModalButton = document.querySelector('.modal__form-send');
var modalWindow = document.getElementById('modal');

closeModalButton.addEventListener('click', closeModal);
modalWindow.addEventListener('click', closeModal);

console.log(location);
console.log(location.pathname);

if (location.pathname === '/index.html' || location.pathname === '/') {
  var openModalButton = document.getElementById('openModal');
  console.log(openModalButton);

  openModalButton.removeAttribute('target');

  openModalButton.addEventListener('click', openModal, false);
} else if (location.pathname === '/catalog.html') {

  var modalLinks = document.getElementsByClassName('catalog-item__price');

  for (var i = 0; i < modalLinks.length; i++) {
    modalLinks[i].addEventListener('click', openModal);
  }
}

function openModal() {
  var modalWindow = document.getElementById('modal');

  modalWindow.classList.remove('modal--closed');
}

function closeModal() {
  var modalWindow = document.getElementById('modal');
  var modalWrapper = document.querySelector('.modal__wrapper');

  modalWrapper.classList.add('modal__wrapper--animation-closed');
  setTimeout(function () {
    modalWrapper.classList.remove('modal__wrapper--animation-closed')
  }, 500);

  setTimeout(function () {
    modalWindow.classList.add('modal--closed')
  }, 500);
}
