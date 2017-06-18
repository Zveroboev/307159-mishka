var closeModalButton = document.querySelector('.modal__form-send');
var modalWindow = document.getElementById('modal');

closeModalButton.addEventListener('click', closeModal);
modalWindow.addEventListener('click', closeModal);
console.log(location.pathname);

if (location.pathname === '/catalog.html'){

  var modalLinks = document.getElementsByClassName('catalog-item__price');

  for (var i = 0; i < modalLinks.length; i++) {
    modalLinks[i].addEventListener('click', openModal);
  }

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
