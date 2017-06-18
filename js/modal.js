var closeModalButton = document.querySelector('.modal__form-send');
var modalWindow = document.getElementById('modal');

closeModalButton.addEventListener('click', closeModal);
modalWindow.addEventListener('click', closeModal);

if (location.pathname === '/catalog.html'){
  var modalLinks = document.getElementsByClassName('catalog-item__price');

  for (var i = 0; i < modalLinks.length; i++) {
    modalLinks[i].addEventListener('click', openModal);
  }
} else if (location.pathname === '/index.html') {
  var openModalButton = document.getElementById('openModal');

  openModalButton.removeAttribute('target');

  openModalButton.addEventListener('click', openModal, false);
}

function openModal() {
  var modalWindow = document.getElementById('modal');

  modalWindow.classList.remove('modal--closed');
}

function closeModal() {
  var modalWindow = document.getElementById('modal');
  var modalWrapper = document.querySelector('.modal__wrapper');

  modalWrapper.classList.add('modal__wrapper--animation-closed');
  setTimeout( function() {modalWrapper.classList.remove('modal__wrapper--animation-closed') }, 500 );

  setTimeout( function() { modalWindow.classList.add('modal--closed') }, 500 );
}
