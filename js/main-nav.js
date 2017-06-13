var navToggler = document.querySelector('.header-top__toggler-img');

navToggler.addEventListener('click', openOrCloseMenu);


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
