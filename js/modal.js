var openModalButton = document.getElementById('openModal');
var closeModalButton = document.querySelector('.modal__form-send');

//Добавить в функцию при загрузке страницы
openModalButton.setAttribute('href', '#');
openModalButton.removeAttribute('target');
//

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

function openModal() {
  var modalWindow = document.getElementById('modal');

  modalWindow.classList.remove('modal--closed');
}

function closeModal() {
  var modalWindow = document.getElementById('modal');

  modalWindow.classList.add('modal--closed');
}
