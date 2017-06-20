//Главное меню
var navToggler = document.querySelector('.header-top__toggler-img');
var element = document.getElementById('main-nav');
var typeMenu = element.classList.contains('main-nav--closed');

element.classList.add('main-nav--closed');
navToggler.setAttribute('src', '/img/icon-menu-open.svg');
navToggler.setAttribute('alt', 'Открыть меню');

navToggler.addEventListener('click', openOrCloseMenu);

function openOrCloseMenu() {
  typeMenu = element.classList.contains('main-nav--closed');

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
//

//Модальное окно
if (location.pathname !== '/form.html') {
  var closeModalButton = document.querySelector('.modal__form-send');
  var modalWindow = document.getElementById('modal');

  closeModalButton.addEventListener('click', closeModal);
  modalWindow.addEventListener('click', closeModal);

  if (location.pathname === '/catalog.html') {
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
    setTimeout(function () {
      modalWrapper.classList.remove('modal__wrapper--animation-closed')
    }, 500);

    setTimeout(function () {
      modalWindow.classList.add('modal--closed')
    }, 500);
  }
}
//

//Слайдер
if (location.pathname === '/catalog.html') {

  var sliderItems = document.getElementsByClassName('slider__item');
  var nextSlide = document.querySelector('.reviews__pagination-next');
  var prevSlide = document.querySelector('.reviews__pagination-prev');


  nextSlide.addEventListener('click', showNextSlide);
  prevSlide.addEventListener('click', showPrevSlide);


  function showNextSlide() {
    for (var i = 0; i < sliderItems.length; i++) {

      if (i === sliderItems.length - 1) {
        sliderItems[i].classList.add('slider__item--hidden');
        sliderItems[0].classList.remove('slider__item--hidden');
        break;
      } else if (!sliderItems[i].classList.contains('slider__item--hidden')) {
        sliderItems[i].classList.add('slider__item--hidden');
        sliderItems[i + 1].classList.remove('slider__item--hidden');
        break;
      }
    }
  }

  function showPrevSlide() {
    for (var i = sliderItems.length - 1; i >= 0; i--) {

      if (i === 0) {
        sliderItems[0].classList.add('slider__item--hidden');
        sliderItems[sliderItems.length - 1].classList.remove('slider__item--hidden');
        break;
      } else if (!sliderItems[i].classList.contains('slider__item--hidden')) {
        sliderItems[i].classList.add('slider__item--hidden');
        sliderItems[i - 1].classList.remove('slider__item--hidden');
        break;
      }
    }
  }
}
//
