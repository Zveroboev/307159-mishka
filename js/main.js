var navToggler = document.querySelector('.header-top__toggler-img');
var promoButton = document.querySelector('.week-item__btn');
var modalButton = document.querySelector('.modal__form-send');
var modalWrapper = document.querySelector('.modal');

//Добавить в функцию при загрузке страницы
promoButton.setAttribute('href', '#');
promoButton.removeAttribute('target');
//

navToggler.addEventListener('click', openOrCloseMenu);
promoButton.addEventListener('click', openModal);
modalButton.addEventListener('click', closeModal);
modalWrapper.addEventListener('click', closeModal);

function openOrCloseMenu() {
  var element = document.getElementById('main-nav');
  var typeMenu = element.classList.contains('main-nav--closed');

  if (typeMenu) {
    element.classList.remove('main-nav--closed');
    navToggler.setAttribute('src', '/img/icon-menu-close.svg');
    navToggler.setAttribute('alt', 'Закрыть меню');
  } else {
    element.classList.add('main-nav--closed');
    navToggler.setAttribute('src', '/img/icon-menu-open.svg');
    navToggler.setAttribute('alt', 'Открыть меню');
  }
}

function openModal() {
  var modalWindow = document.getElementById('modal');

  modalWindow.classList.remove('modal--closed');
}

function closeModal() {
  var modalWindow = document.getElementById('modal');

  modalWindow.classList.add('modal--closed');
}
