'use strict';
//
// only difference between a construction func and normal func is that const func with the new operator, always starts with a capital letter
//we can not use arrow function as func declaration here as that does not have this keyword and we need
const Person = function (firstName, birthYear) {
  console.log(this); //Person {}

  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Adding methods, but NEVER CREATE A METHOD INSIDE A CONSTRUCTION FUNCTION!!!! INSTEAD OF USE PROPTOTYPES
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); //Person { firstName: 'Jonas', birthYear: 1991 }

//this new operator does the followings:
//1. new empty {} created
//2. the function is called and the this keyword will be set to this newly created object
//3. this newly created object is linked to a prototype
//4. the object that was created in the beginning is then automatically returned from a constructor function, but the object no longer needs to be empty

//so the Person contruction func  is kind of a blueprint for a house and all the new created objects creted through that const func are the actual house
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);
//we did create objects from construction func
//so jonas matilda and jack are instances for person, and there is an operator we can test this
console.log(jonas instanceof Person); //true
