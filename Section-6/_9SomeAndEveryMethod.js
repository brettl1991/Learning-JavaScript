'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.includes(-130)); //true, so includes method to test if an element included in the array, this chceks for equality

//we want to know if any positive movement in this array
//some method we can specify a condition and check
const anyDeposit = movements.some(mov => mov > 5000);
console.log(anyDeposit); //false

//every method, similar like some, difference: only returns true if all of the elemnts satisfy the condition
console.log(movements.every(mov => mov > 0)); //false

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

console.log(account4.movements.every(mov => mov > 0)); //true

//Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); //true
console.log(movements.every(deposit)); //false
console.log(movements.filter(deposit)); //[ 200, 450, 3000, 70, 1300 ]
