'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.includes(-130)); //true, so includes method to test if an element included in the array, this chceks for equality

//we want to know if any positive movement in this array
//some method we can specify a condition and check
const anyDeposit = movements.some(mov => mov > 5000);
console.log(anyDeposit); //false
