'use strict';
//establish initial condition where the slides side by side, so not on top of each other

//slider and btn selecting
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let currentSlide = 0;
  //define a number of slides and tell it when reaches the last to stop
  const maxSlide = slides.length; //on nodelist as well we can read the lenght property same as on arrays

  //scale down the slider
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  //set overflow to visible to see the other slides
  // slider.style.overflow = 'visible';
  //first slide should be 0%, 2nd 100%, 3rd 200%, 4th 300%
  //goToSlide(0) will replace this, so the slide set to 0, this will do: once our application starts it immediately goes slide to 0 (so i-0 will be i like here below)
  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // goToSlide(0);
  //going to the next slide (active 0%, previous -100%, next one is 100%)
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    //CurrentSlide = 1: -100%,0%,100%,200%
    goToSlide(currentSlide);
    activateDots(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDots(currentSlide);
  };

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  //attaching an event handler to a keyboard event to slide through the slider using the left and right arrow keys on keyboard
  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    //or we can use short circuting
    // e.key === 'ArrowLeft' && nextSlide();
  });

  ////creating the dots underneath the slider
  const dotContainer = document.querySelector('.dots');
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  // createDots();

  //make dots work using event delegation
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      console.log('DOT');
      const { slide } = e.target.dataset; //dataset.slide comes from above data-slide, so all the custom data attributes are in the dataset and .slide, but because we destructured .slide it is not need end of dataset
      //go to the side that we just selected
      goToSlide(slide);
      activateDots(slide);
    }
  });

  //activate dots to show which one is going to be the curent slide, no matter we click on the dots or we are using the arrow buttons
  const activateDots = function (slide) {
    //first we will select all the dots and remove the active class and add only to that one which we are intrested in
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    //select the one we are intrested in based on the data attribute
    document
      .querySelector(`.dots__dot[data-slide = "${slide}"]`)
      .classList.add('dots__dot--active');
    //we need to add this function to all the necessary places
  };

  //one problem when we reload non of the slides are active, to solve add createDots(0)
  // activateDots(0); //with this the first dot got activated once we reload the page

  //refactoring
  const init = function () {
    goToSlide(0);
    createDots();
    activateDots(0);
  };
  init();
};

slider();
