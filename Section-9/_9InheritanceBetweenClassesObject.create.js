'use strict';
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

//add init method to studentproto to avoid manually specify the properties on any new student object
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto); //so now studentproto is the prototype of jay, so personproto is a parent prototype of jay
jay.init('Jay', 2010, 'Computer science');
console.log(jay); //{ firstName: 'Jay', birthYear: 2010, course: 'Computer science' }
jay.introduce(); //My name is undefined and I study Computer science
jay.calcAge(); //27
