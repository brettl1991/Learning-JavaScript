'use strict';
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}!`);
  }

  //Public interface
  deposit(value) {
    this.movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  //request loan

  approveLoan(value) {
    return true;
  }
  requestLoan(value) {
    if (this.approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1); //Thanks for opening an account Jonas!
//Account { owner: 'Jonas', currency: 'EUR', pin: 1111 }

//movements and local from navigator.language (returns a string representing the preferred language of the user, usually the language of the browser UI) array adding to the account??

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1); //[250, -140]
acc1.requestLoan(1000);
