/**
 * Created by Sergey on 18.06.2017.
 */
console.log( document.getElementsByClassName('about-us__item1')[0] );

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrolled);


  // Заголовок секции Товар недели
  if (scrolled >= 400) {
    document.querySelector('.week-item__title').classList.add('theme__section-title--animation');
  }
  //
  //Заголовок секции О нас
  if (scrolled >= 1100) {
    document.querySelector('.about-us__title').classList.add('theme__section-title--animation');
  }
  //Левые элементы li в секции О нас
  if (scrolled >= 1300) {
    document.getElementsByClassName('about-us__item1')[0].classList.add('theme__about-item--animation-left');
    document.getElementsByClassName('about-us__item4')[0].classList.add('theme__about-item--animation-right');
  }

  if (scrolled >= 1450) {
    document.getElementsByClassName('about-us__item2')[0].classList.add('theme__about-item--animation-left');
    document.getElementsByClassName('about-us__item5')[0].classList.add('theme__about-item--animation-right');
  }

  if (scrolled >= 1650) {
    document.getElementsByClassName('about-us__item3')[0].classList.add('theme__about-item--animation-left');
    document.getElementsByClassName('about-us__item6')[0].classList.add('theme__about-item--animation-right');
  }
  //

  if (scrolled >= 1800) {
    document.querySelector('.reviews__title').classList.add('theme__section-title--animation');
  }
};

