'use strict';
const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//add a static method
//creating a function which wawes
Person.hey = function () {
  console.log('Hey there 🙆‍♀️');
};

Person.hey(); //Hey there �‍♀️ points to the entire object
//but can not be inherited
jonas.hey(); //error

//in classes we just need to add the static keyword

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  set fullName(name) {
    console.log(name);
    if (name.includes('')) this._fullName = name;
    else alert(`${name} is not a full name.`);
  }
  get fullName() {
    return this._fullName;
  }
  //instance method
  static hey() {
    console.log('Hey there 🙆‍♀️');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);

PersonCl.hey(); //points to the entire class
