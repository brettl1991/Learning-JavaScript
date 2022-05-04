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
console.log(logo.designer); //not working, getting undefined because this is not a standard property that is expected to be on img
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

//IMPLEMENTING SMOOTH SCROLLING WHEN WE CLICK TO LEARN MORE, SCROLLS TO THE FISRT SECTION
//1selecting button and section where we want to scroll to
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//add eventlistener on the button
btnScrollTo.addEventListener('click', function (e) {
  //first we need to get the coordinates of the element that we want to scroll to
  const s1coords = section1.getBoundingClientRect(); //so getBoundingClientRect() always relative to this visible viewport so when we scroll or move will be different that it returns back
  console.log(s1coords); //we get in console the DOM rectangle with width height, x y data etc
  //{x: 0, y: 338.3999938964844, width: 1519.2000732421875, height: 1670.4500732421875, top: 338.3999938964844, …}

  console.log(e.target.getBoundingClientRect()); //e.target is the btnScrollTo

  //we can get current scroll position:
  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset); //Current scroll (X/Y) 0 300
  //we can read the height and width of the viewport
  console.log(
    'height/width vieport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); //height/width vieport 407 1519

  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // ); //with this we determined the absolute position of this element relative to the entire page (current position + current score)

  //or much better way
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //more modern way
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//TYPES OF EVENTS AND EVENT HANDLERS
//everything that happens on the webpage generates ans event

const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// }); //museenter is like a hoover event in css, so whenever the mouse enters a certain elements an alert pops up

//an other way to attach eventlistener, but we use modern way by addEventListener
//pros to use addEventListener: allow us to add multiple eventlistener to the same event, also another is that we can remove an eventhandler if we dont need anymore(but first we need to export a function to a named function)
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

//remove an eventhandler
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
  // h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);
//but we can remove after a certain time passed
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//3rd way to handling an event is using a html attribute: should not be used
//passing onclick to h1 element in html

//EVENT PROPAGATION: BUBBLING AND CAPTURING
//attaching event handlers to the nav link and all of it parents elements and when we click this link we will give all these elemnts random bg colors so we can se how event bubbling happening
// rgb(255, 255, 255);

//this was the formula that we used before to generate a random intiger
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255)); //random colors keep appearing in the console

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('LINK', e.target, e.currentTarget);
  //this keyword points always to an element on which the eventhandler attached if it's in an eventlistener
  this.style.backgroundColor = randomColor();

  //stop propagation
  // e.stopPropagation();//the event never arrive to the other elements down there in this case, so just only nav__link color will randomly change
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('LINK', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('LINK', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});
//console.log('LINK', e.target); when we click example to just the nav__link for all 3 handler the target element always be the same, the element where the click first happened(nav__link), because of event bubbling
// LINK <a class="nav__link" href="#section--1" style="background-color: rgb(196, 101, 11);">Features</a>
// LINK <a class="nav__link" href="#section--1" style="background-color: rgb(148, 234, 113);">Features</a>
// LINK <a class="nav__link" href="#section--1" style="background-color: rgb(137, 11, 147);">Features</a>
//e.currentTarget not the same and will be the elemnet on which the eventlistener to atatched to, like this keyword

//Capture phase: default behavior for events
//if we want to catch events during the capturing phase we can define a 3rd parameter in the addEventListener function
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     console.log('LINK', e.target, e.currentTarget);
//     this.style.backgroundColor = randomColor();
//   },
//   true
// ); //set the 3rd parameter to true , the eventhandler not listening to the bubbling events, instead to capture events, in pracice looks the same but in the console we can see the nav is the first appearing, capturing rarely used nowdays
