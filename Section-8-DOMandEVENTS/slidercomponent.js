'use strict';
//establish initial condition where the slides side by side, so not on top of each other

//slider and btn selecting
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
//define a number of slides and tell it when reaches the last to stop
const maxSlide = slides.length; //on nodelist as well we can read the lenght property same as on arrays

//scale down the slider
const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX(-800px)';
//set overflow to visible to see the other slides
slider.style.overflow = 'visible';
//first slide should be 0%, 2nd 100%, 3rd 200%, 4th 300%
//goToSlide(0) will replace this, so the slide set to 0, this will do: once our application starts it immediately goes slide to 0 (so i-0 will be i like here below)
// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);
//going to the next slide (active 0%, previous -100%, next one is 100%)
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  //CurrentSlide = 1: -100%,0%,100%,200%
  goToSlide(currentSlide);
};
btnRight.addEventListener('click', nextSlide);
