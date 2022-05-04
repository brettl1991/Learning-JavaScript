'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//selecting elements
console.log(document.documentElement); //in the DOM the entire html elemnet selected by the console
console.log(document.head);
console.log(document.body);

//or
document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); //this will return a nodelist which will contain all of the elements that are a section

//or
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //get ElementsByTagName returns a HTML collection with all the buttons, HTML collection when the DOM changes (like we delete one button) will be updated automatically and going to be 8 button not 9 in total, but with nodelist (quesrySelectorAll) it is not happening, when we try and delete one section, still we get back 4 sections  because the variable was created by the time when a section still was existed

//or

console.log(document.getElementsByClassName('btn')); //this will also return a HTML collection
