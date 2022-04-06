'use strict';
//simple string transformation functions:

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//create higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord); //the transformer function calling upperFirstWord function

//Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord

transformer('JavaScript is the best!', oneWord);
//Original string: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord

const high5 = function () {
  console.log('👋');
};

//JS uses callback functions all the time: makes it easy to split up our code for more usable code, allows to create abstarct(means we hide a detail in some code implementation and this allows us to think about in a more higher abstuct level),

document.body.addEventListener('click', high5); //high5 is callback function, addeventlistener is a higher order func

['Jonas', 'Marta', 'Adam'].forEach(high5); //3 times wawing
