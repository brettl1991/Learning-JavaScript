'use strict';
//we can use Object.create() to manually set the prototype of an object to any other object we want
//create an object that we want to be the prototype of the other objects
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  //better way to fill in
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); //returns a brand new object which linked to it's proptotype (PersonProto)
console.log(steven);
//not best way to fill
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); //35

//so we manually set the prototype of steven object to PersonProto object

console.log(steven.__proto__); //gonna be calcage
console.log(steven.__proto__ === PersonProto); //true

const sarah = Object.create(PersonProto);
//better way to fill in

//nothing to do with constructor func or method in ES6 classes, this is different, just manual way to initialise object
sarah.init('Sarah', 1979);
sarah.calcAge();
