'use strict';

console.log(this); //window object in console

//this in func declaration
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined
};

calcAge(1991); //regular function call

////this in func expression
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //window, because arrow func has not their own this keyword, so using the parents scope this keyword
};

calcAgeArrow(1980);

////this in methods
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year); //46
  },
};

jonas.calcAge(); //jonas object, because this keyword is the object that is calling the method

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; //matilda also have year and calcAge function
matilda.calcAge(); //20, so this keyword point to matilda, this proves this keyword always points to the object which is calling the method

const f = jonas.calcAge();
f(); //undefined, because f() is just a regular function call
