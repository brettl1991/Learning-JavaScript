'use strict';
//they are part of classfields proposal (at stage 3 in js so not publicated yet)
//properties means in class fields fields
//Public fields(public instance fields)
//Private fields
//Public methods
//Private methods

//there is also static versions of the above by adding static keyword in front of it, and works just on the main class

class Account {
  //1. defining public fields (instances)
  locale = navigator.language;
  // _movements = [];

  //2. Private fields
  #movements = [];
  //we can not define a field inside constructor
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protected property
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}!`);
  }
  //Public interface basically = 3. public methods
  getMovements() {
    return this._movements;
  }

  deposit(value) {
    this._movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  requestLoan(value) {
    if (this.approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
    }
  }

  //4.Private methods
  #approveLoan(value) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
acc1.requestLoan(1000);

// console.log(acc1.#movements); //we get syntacs error because of privacy
// console.log(acc1.#pin);//same as above, because of privacy
// console.log(acc1.#approveLoan(100)); //same as above
