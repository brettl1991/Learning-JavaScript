'use strict';
//primitives are numbers, strings, booleans etc
let age = 30;
let oldAge = age;
age = 31;
console.log(oldAge); //31
console.log(age); //30

const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend: ', friend); //Friend:  Objectage: 27name: "jonas"[[Prototype]]: Object

console.log('Me', me); //Me {name: 'jonas', age: 27} age: 27 name: "jonas" [[Prototype]]: Object

//thats why we call objects reference types, because when we declare a variable as an object and identifier is created which points to a piece of memory in the stack which in turn points to a piece of memeory in the heap, and that is where the object is stored not in the call stack where we can find just their refereence and this heap also has unlimited storage and also primitives stored in call stack

//and because we set the friend.age to 27 and the object can be found in the heap, that is teh reason getting 27 the me object as well
//so with reference values the const rules which stands they are immutable, not relaible here

//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName); //davis
console.log(oldLastName); //williams

//reference types

const Jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = Jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', Jessica); //davis
console.log('After marriage : ', marriedJessica); //davis

// marriedJessica = {}; //we can not assig a new object to it

//copying objects
const Jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

//merge 2 objects and return a new one
const jessicaCopy = Object.assign({}, Jessica2); //this works just on first level, if an object in an object than not going to work
jessicaCopy.lastName = 'Davis';
console.log('Before marriage: ', Jessica2); //{firstName: 'Jessica', lastName: 'Williams', age: 27}
console.log('After marriage : ', jessicaCopy); //{firstName: 'Jessica', lastName: 'Davis', age: 27}

//object within the object: adding an array to the above object, this only can be done with deep clone(learning later, basically using an external library)
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage: ', Jessica2); //contains the new names
console.log('After marriage : ', jessicaCopy); //contains the new names
