"use strict";

//we can pass function inside the objects too with function expression
//so any function that attached to an object we calling method
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michel", "Peter", "Steven"],
  hasDrivingLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  //this keyword or this variable = to the object on which the method called, or = to the object calling the method for DRY
  // calcAge: function () {
  //   console.log(this); //we are getting back the whole object
  //   return 2037 - this.birthYear;//we read the birthyear directly from the object, so if we are changing the object name we still can access to birthyear with this, but with jonas.birthyear can not if we are changing the name of the object
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear; //to give new property to the object
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      jonas.job
    }, and he has ${this.hasDrivingLicense ? "a" : "no"} driver's licence`;
  },
};
// console.log(jonas.calcAge(1991)); //or can access with bracket notation as well
// console.log(jonas["calcAge"](1991));but we should not repeat ourself if we have birthyear in the object plus here also
//directly access from jonas property this function using: this
//who is calling the function/ jonas
console.log(jonas.calcAge());

//if we need to access the age multiple times
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Write a method: get summary, that should return a string which should summerise the following of jonas:
//"Jonas is a 46 years old teacher and he has a/no driver's licencese."

console.log(jonas.getSummary());
