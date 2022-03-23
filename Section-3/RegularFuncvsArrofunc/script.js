'use strict';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //solution I
    // const self = this; //we still have outside here access to this keyword, cand be self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year === 1981 && self.year <= 1996);
    //   console.log(this.year === 1981 && this.year <= 1996);
    // };

    //solution II, this works because the arrow func uses this keyword from its parents scope, this case from jonas
    const self = this;
    const isMillenial = () => {
      console.log(this);
      console.log(this.year === 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet(); //Hey undefined, becuse arrow func. has not their own this keyword
console.log(this.firstName); //undefined, because this the window object and there is no firstName property in it
jonas.calcAge(); //can not read property 'year' of undefined, so inside a regular function call the this keyword must be undefined, to prevent this use self

//never ever use arrow function as a method

//arguments keyword
const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpression(2, 5);
addExpression(2, 5, 8, 12); //we can pass more arguments;

var adArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

adArrow(2, 5, 8); //arguments keywords only exist in regular functions
