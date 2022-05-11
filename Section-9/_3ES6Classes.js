'use strict';

//class expression
// const PersonCl = class {};

//or we use:
//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //the methods we can add here and they will be added to the prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

//behind the scenes classes are functions

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica); //PersonCl { firstName: 'Jessica', birthYear: 1996 }
jessica.calcAge(); //41

//an other method to be added to the prototype:
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet(); //Hey Jessica

//classes are:
//1. not hoisted (we can not use them before they declared in the code)
//2. first class citizens like functions so we can pass them into functions and we also can return them from functions
//3. the body of the class are always executed in strict mode

//What to use? classes or constructor functions? personal preference
