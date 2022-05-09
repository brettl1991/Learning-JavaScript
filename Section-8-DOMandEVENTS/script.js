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
// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections); //this will return a nodelist which will contain all of the elements that are a section

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
// header.append(message);
//a DOM element is unique so always only exist in one place at the time, so with those above we can just insert once
//but if we want to insert multiple copies of the same element: first we need to copy
// header.append(message.cloneNode(true)); //all the child elements will be copied, so now we get the same cookie message in both places

// header.before(message); //insert the message as a sibling before the header element
// header.after(message); //insert the message as a sibling after the header element

//delete elements
//we want to delete the message element if we are clicking the got it button
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     //before we removed like this:
//     // message.parentElement.removeChild(message);
//   });

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
//adding in html under designer : data-version-number="3.0", than using here camelCase
console.log(logo.dataset.versionNumber); //3.0

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//we can set the class, but dont use because this will overwrite all the existing classes and allow us to put only one class to an element
logo.className = 'jonas';

//IMPLEMENTING SMOOTH SCROLLING WHEN WE CLICK TO LEARN MORE, SCROLLS TO THE FISRT SECTION
//1 selecting button and section where we want to scroll to
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
//everything that happens on the webpage generates an event

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
//attaching event handlers to the nav link and all of it parents elements and when we click this link we will give all these elements random bg colors so we can see how event bubbling happening
// rgb(255, 255, 255);

//this was the formula that we used before to generate a random intiger
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255)); //random colors keep appearing in the console

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('LINK', e.target, e.currentTarget);
//   //this keyword points always to an element on which the eventhandler attached if it's in an eventlistener
//   this.style.backgroundColor = randomColor();

//   //stop propagation
//   // e.stopPropagation();//the event never arrive to the other elements down there in this case, so just only nav__link color will randomly change
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('LINK', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('LINK', e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
// });
//console.log('LINK', e.target); when we click example to just the nav__link for all 3 handler the target element always be the same, the element where the click first happened(nav__link), because of event bubbling
// LINK <a class="nav__link" href="#section--1" style="background-color: rgb(196, 101, 11);">Features</a>
// LINK <a class="nav__link" href="#section--1" style="background-color: rgb(148, 234, 113);">Features</a>
// LINK <a class="nav__link" href="#section--1" style="background-color: rgb(137, 11, 147);">Features</a>
//e.currentTarget not the same and will be the element on which the eventlistener to atatched to, like this keyword

//Capture phase: default behavior for events
//if we want to catch events during the capturing phase we can define a 3rd parameter in the addEventListener function
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     console.log('LINK', e.target, e.currentTarget);
//     this.style.backgroundColor = randomColor();
//   },
//   true
// ); //set the 3rd parameter to true , the eventhandler not listening to the bubbling events, instead to the capture events, in practice looks the same but in the console we can see the nav is the first appearing, capturing rarely used nowdays

//EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION SMOOTHLY
//page navigation
//first without event delegation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     console.log('LINK');
//     e.preventDefault(); //now we prevent to scroll down when we clicking each of the nav link
//     const id = this.getAttribute('href'); //have to select href to be able to use smooth scroll through the href link
//     console.log(id); //getting back section-1 2 or 3 depends which one we click
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//but now we have just 3 element and what if we need to do this with 1000 elements instead of 3, than this soloution above would affect badly the performance of the code, not a clean solution, better to use event delegation

//with event delegation we use the fact that events bubble up and we do that by putting the eventlistener on a common parent of all the elements that we are intrested in

//1.Add the eventlistener on a common parent of all the elements that we are intrested in
//2.Determin what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //we need to figure out where the event happened
  console.log(e.target);

  //matching strategy to figure out if the target contains nav__link or not when we click
  if (e.target.classList.contains('nav__link')) {
    console.log('LINK');

    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//DOM TRAVERSING
//basically walking through the DOM, which means that we can select an element based on an other element
//going downwards: (child)
console.log(h1.querySelectorAll('.highlight'));
//for direct children:
console.log(h1.childNodes);
console.log(h1.children); //gives us an HTML collection
//first and last element child
h1.firstElementChild.style.color = 'white'; //banking word become white
h1.lastElementChild.style.color = 'orangered'; //minimalist word become orangered

//going upwords: parents
console.log(h1.parentNode); //giving back header title
console.log(h1.parentElement); //same in this case

//we might need to find a parentelement no matter how far in the DOM tree
// h1.closest('.header').style.background = 'var(--gradient-secondary)'; //selected the closest parent element that has the header class and styled it
//if we are looking for the closest h1
h1.closest('h1').style.background = 'var(--gradient-primary)'; //h1 element itself become green

//the querySelector finds children while the closest method find parents

//goins sideways: siblings (in js we can access just direct siblings)
console.log(h1.previousSibling); //null as nothing there
console.log(h1.nextElementSibling); //h4 element

//same properties for nodes:
console.log(h1.previousSibling); //text
console.log(h1.nextSibling);

//if we need all siblings
console.log(h1.parentElement.children); //we get all of the siblings includes itself
//we can create from this an array and we can loop over them
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)'; //all the other siblings are 50% smaller
});

//BUILDING A TABBED COMPONENT
//selecting the tabs
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//adding event handlers to the buttons using event delegation:
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log('CLOSEST: ', e.target.closest('.operations__tab'));
  console.log(clicked); //so we get which button we clicked
  //need to fix when we click the tabs container we get null as there is no parent element so we need to ignore any clicks where the result is 0, this is:
  //guard clause: an if statement which will return early if some condition is matched
  if (!clicked) return; //if no click return back to the function
  //fixing when we click only one button should move up, the others should stay down so we need to remove the active class before we add to the clicked one, also doing the same for the tabs (removing active class before we adding to that we intrested in)

  //remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //activate tab
  clicked.classList.add('operations__tab--active');
  console.log('DATASET TAB', clicked.dataset.tab);
  console.log('DATASET', clicked.dataset);

  //activate the content area: this info is in the data attribute in HTML
  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`) //this is for the content below tabs
    .classList.add('operations__content--active');
});

//PASSING ARGUMENTS TO EVENT HANDLERS
//when we hoover over the links all the others fade out except the one we hoovered over
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    //need to select sibling elements, so all the other link
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

////so we use a bind method for both to pass an argument into a handlerfunction

const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', handleHover.bind(0.5));

//fixing the opacity to go back from 0.5 to 1
nav.addEventListener('mouseout', handleHover.bind(1));

//IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT
//so the nav bar become attached the page after we scroll to a certain point

//sticky navigation, the scroll event available on window not on document, the scroll event should be avoided because of performance issues
const initialCordinates = section1.getBoundingClientRect();
console.log(initialCordinates);
window.addEventListener('scroll', function () {
  console.log(window.scrollY); //position from the point of the viewport until the top of the page

  //when the navigation should be sticky? as soon as we reach the 1st section
  if (window.scrollY > initialCordinates.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

//BETTER WAY: THE INTERSECTION OBSERVER API
//Observers are objects that observe or spot something in real-time, Observer APIs are useful to detect changes in an application
//In Javascript, performing an action when an element becomes visible to a user has always required the following:
//Identifying the current scroll position. Getting the element’s top offset. Listener cleanup. Load on the main thread work. The Solution: Intersection Observer API
//The Intersection Observer API can be used to observe an element and run a callback function when it enters or leaves the viewport (or another element).
// how this work? to use we need to create a new intersection observer and options
const obsCallback = function (entries, observer) {
  //   //entries are an array of the threshold
  //   //this callback func will get called each time when the observed element is (target element: section1) intersecting the root element at the threshold that we defined, so when the first section (our target) intersecting the viewport at 10% that func will get called no matter that we scroll down or up
  entries.forEach(entry => {
    console.log(entry); //when the target element come into the viewport because we scrolling and we can use this to know when we arrive into certain parts
  });
};
const obsOptions = {
  root: null, //the root is the element that the target is intersecting(atmetsz), if null we looking at the viewport
  threshold: [0, 0.2], //the percentage of intersection at which the observercallback will be called, 0% means that our callback will trigger(kivalt, eloidez) each time that the target elements moves completaly out or enters the view, if it would be 1: means 100% so the callback will only be called when 100% the target will be visible in the viewport
};
const observer = new IntersectionObserver(obsCallback, obsOptions); //first parameter is the callback, second is the options(we can write the options inside here as well)
// //observe a certain target
observer.observe(section1);

//so we want our nav to be sticky when the header moves completaly out of the view
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function (entries) {
  //this case dont need to define the observer, and because only one threshold we do not need to loop over the entries like above
  const [entry] = entries; //same as we would write : const[entry] = entries[0], so we can get the first threshold
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //a box of pixels that will applied outside of our target (this case header)  elements //so the nav appeared exactly at 90 px before the threshold got reached, these pixels can get calculated dynamically(here is navHeight)
});
headerObserver.observe(header);

//REVALING (FELTAR, LELEPLEZ) ELEMENTS ON SCROLL

//using the inrasection observer api
//we will revale elements as we close to them, so we will revale each 4 sections as we get close

//adding .section-hidden css class to all section in hml, so they gonna be invisible, but we can do this by writing code and not manually
//so our job to remove these calsses as we approach each sections

//Revael sections
const allSections = document.querySelectorAll('.section');
console.log('ALLSECTION', allSections);
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  //we need to know which section inrasected the viewport, thats where we use target
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  //stop observing
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  console.log('SECTION', section);
  sectionObserver.observe(section);
  section.classList.add('section--hidden'); //adding .section-hidden css class to all section in hml
});

//LAZY LOADING IMAGES
//ON WEBSITES THE PERFORMANCE IS REALLY IMPORTANt, SO DOES HOW IMAGES LOADING
//the idea when we scroll we will replace the low resolution images to a digital one (low res images are in src in html, bigger sized images in data-src underneath) and we are planning to remove the lazy-img class as well when we scroll to that point as this class kind of behaving like a blur filter

//not all img will be lazy loaded so we dont need to select all of them
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);
const loadinImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  //Replace src attribute with data.src (replace the img with that we want)
  entry.target.src = entry.target.dataset.src;
  //remove the blury image (only will disappaear once the loading of the img finished)
  entry.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadinImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', //before we reach the images already loaded to the digital one and we cant see the blurring out process
});
imgTargets.forEach(img => imgObserver.observe(img));
