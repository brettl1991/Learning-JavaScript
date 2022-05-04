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

//delete elements
//we want to delete the message element if we are clicking the got it button
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //before we removed like this:
    // message.parentElement.removeChild(message);
  });

//Styles
//to set a style on an element (have to use camelcase version)
message.style.backgroundColor = '#37383d';
//set the width
message.style.width = '120%';
//in the console we only can get from the styles that we defined nothing else, like wont work if we want to get the height
console.log(message.style.height); //we get back nothing
//if we want to get back the color from the stylesheet:
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height); //we can get message's height even though is not defined

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; //as this will be a string we need to take out numbers from a string with parseFloat, 43.6667px

//with custom properties (css variables) in root: in stylesheet we need to use setproperty but we can use this by the above actions
//we want to change our primary color
document.documentElement.style.setProperty('--color-primary', 'orangered'); //.documentElement is the way how we get acces to the root

//Attributes: provides info abou HTML elements (like href, style, alt, class, id...)
//select logo

const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //Bankist logo
console.log(logo.src); //http://127.0.0.1:8080/img/logo.png this is the absolute version (console version)
//but when we adding manually to img designer='Jonas' and we try to read from here:so
//non-standard
console.log(logo.designer); //not working undefined because this is not a standard property that is expected to be on img
//the way to acces is:
console.log(logo.getAttribute('designer')); //Jonas
console.log(logo.setAttribute('company', 'Bankist')); //new attribute cretaed Bankist="company"
console.log(logo.getAttribute('src')); //img/logo.png this is the relative version (html version)
//otherone which work
console.log(logo.className); //nav__logo

//we can not just read bu set them as well
logo.alt = 'Beautiful minimalist logo'; //so we changed it in html

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //absolute version    http://127.0.0.1:8080/#
console.log(link.getAttribute('href')); //relative version    #

//data attributes: special attributes, starts with a data, we working with them when we need to store data in the ui
//adding htmls under designer : data-version-number="3.0", than using here camelCase
console.log(logo.dataset.versionNumber); //3.0

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//we can set the class, but dont use because this will overwrite all the existing classes and allow us to put only one class to an element
logo.className = 'jonas';
