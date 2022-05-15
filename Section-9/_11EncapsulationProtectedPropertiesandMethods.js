'use strict';
//encapsualtion means to keep some properties and methods private inside the class, the rest of the methods are exposed to a public interface (API)
//Reasons we need encapsulation:
//1.Prevent code from outside of the class to accidentaly manipulate the data inside the class
//2. When we expose only a small interface, we can change all the other internal methods with more confidence, our code will not brake when we make internal changes

//lets protect movements array, so add _ in front of the property name
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //protected property
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}!`);
  }
  //if we want to add access to the movement property from outside we need to implement a method for it, so they can get access but can not overwrite them
  getMovements() {
    return this._movements;
  }

  deposit(value) {
    this._movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  _approveLoan(value) {
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

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
acc1.requestLoan(1000);

console.log(acc1.getMovements());
