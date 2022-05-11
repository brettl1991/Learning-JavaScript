'use strict';
//in js every object can have these 2 properties, they are functions and they get or set values, but outside they still look properties

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  //we want a method to get the latest movement
  get latest() {
    return this.movements.slice(-1).pop();
  },

  //doing same with setter by adding a new movements to the array
  //every setter needs to have at least 1 parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300 so we dont call as a method latest(), we just call as a property
account.latest = 50;
console.log(account.movements); //[ 200, 530, 120, 300, 50 ]

//classes also have setter and getter and they work exact same way
//they are also good for validation: check if the name contains space return fullname
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  //Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes('')) this._fullName = name;
    //_ is just a convention to avoide variable conflict between fullName-s, basically we are creating a new fullName variable, but with this jessica.fullName will be undefined so wee need now a getter as well
    else alert(`${name} is not a full name.`);
  }
  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica); //Jessica Davis
//PersonCl { _fullName: 'Jessica Davis', birthYear: 1996 }

const walter = new PersonCl('Walter', 1965); //alert pops up : walter is not a full name
console.log(walter);
