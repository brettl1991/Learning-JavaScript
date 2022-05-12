'use strict';
//Inheritance between classes using constructor functions

const Person = function (firstName, birthYear) {
  console.log(this); //Person {}

  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//child class
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//we want the child to inherit from a parent, we have to create this connection here before we add anymore method to the prototype object of student
//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
// Student {
//   firstName: 'Mike',
//   birthYear: 2020,
//   course: 'Computer Science'
// }

mike.introduce(); //My name is Mike and I study Computer Science
mike.calcAge(); //17

//so mike inherit from person object
