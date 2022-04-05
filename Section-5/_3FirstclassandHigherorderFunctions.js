'use strict';
//Fisrt class functions: js treats them as first class citizens, this means that functions are simply values, really just an other 'type' of objects:
//we can store functions in variables or properties
const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};
//we can pass functions as arguments to other functions
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet); //greet is a first class function
//we can return a function from an other function
//there are methods we can call on a function like bind method
counter.inc.bind(someOthetObject);

//higher order functions: 1. a function that receives an other function as an argument, 2. that returns a new function or both and this is only possible because of first class functions
//1.
const greet2 = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet2); //addeventlistener a higher order function, greet is a callback function which will be called by the higher order function

//2.
function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}

//so first class functions are features that a programming language either has or not, means all functions are values
//the language support first class functions so higher order functions can be in practice
