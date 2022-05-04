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
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); //this will return a nodelist which will contain all of the elements that are a section

//or
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //get ElementsByTagName returns a HTML collection with all the buttons, HTML collection when the DOM changes (like we delete one button) will be updated automatically and going to be 8 button not 9 in total, but with nodelist (quesrySelectorAll) it is not happening, when we try and delete one section, still we get back 4 sections  because the variable was created by the time when a section still was existed

//or

console.log(document.getElementsByClassName('btn')); //this will also return a HTML collection

//Creating and inserting elements
// .insertAdjacentHTML //quick and easy to use

//or creating elements from scratch
const message = document.createElement('div'); //this no where to be found in our webpage just we created and we can use to do something, if we want to add on the page we manually need to insert it
//this element will display cookie messages
message.classList.add('cookie-message');
//we can also add text to the element
message.textContent =
  'We use cookies for improved functionality and analytics.';
//we can insert also HTML
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
//insert it to the DOM in to our page in header
// header.prepend(message); //prepend adding the element as a first child
//append adding the element as a last child
header.append(message);
//a DOM element is unique so always only exist in one place at the time, so with those above we can just insert once
//but if we want to insert multiple copies of the same element: first we need to copy
// header.append(message.cloneNode(true)); //all the child elements will be copied, so now we get the same cookie message in both places

// header.before(message); //insert the message as a sybling before the header element
// header.after(message); //insert the message as a sybling after the header element
