'use strict';
//establish initial condition where the slides side by side, so not on top of each other

//slider
const slides = document.querySelectorAll('.slide');

//scale down the slider
const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX(-800px)';
//set overflow to visible to see the other slides
slider.style.overflow = 'visible';
//first slide should be 0%, 2nd 100%, 3rd 200%, 4th 300%
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
