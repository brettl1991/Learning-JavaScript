'use strict';
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey there!`);
  }
}

// to implement inhaeritance between ES6 classes we need 2 ingredients: we need the extend keyword and a super function

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //always needs to happen first, than the this keyword, otherwise wont work
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  //overwrite clcage method
  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }.` //I am 25 years old, but as a student I feel more like 35.
    );
  }
}

const martha = new StudentCl('Marta Jones', 2012, 'Computer science');
console.log(martha);
//StudentCl {
//   _fullName: 'Marta Jones',
//   birthYear: 2012,
//   course: 'Computer science'
// }

martha.introduce(); //My name is Marta Jones and I study Computer science
martha.calcAge(); //25
