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
