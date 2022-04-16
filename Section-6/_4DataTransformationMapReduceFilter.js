'use strict';

//1, map method: similar like forEach, we can loop over an array, difference that is map creates a brand new array based on an original, this new array will contain in each position the result of applying a callback function to the original array elements

//2, filter method: use to filter for elements in the oroginal array which satisfy a certain condition

//3, reduce method: "boils" all arrays elements down to one single value

//1
//want to convert EUR movements to USD dollars
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
//or same above with arrow function:
const movementsUsd = movements.map(mov => mov * eurToUsd);
// });

console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movementsUsd);
//[
//   220.00000000000003,
//   495.00000000000006,
//   -440.00000000000006,
//   3300.0000000000005,
//   -715.0000000000001,
//   -143,
//   77,
//   1430.0000000000002
// ]

//with for of loop:
const movementsUsdfor = [];
for (const mov of movements) movementsUsd.push(mov * eurToUsd);
console.log(movementsUsdfor); //same like movementUsd above

//also has access the same parameters like forEach
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}` //this is a callback function, but we are not calling it ourselves, the map method calling it
);

console.log(movementsDescriptions);
//[
//   'Movement 1: You deposited 200',
//   'Movement 2: You deposited 450',
//   'Movement 3: You withdrew 400',
//   'Movement 4: You deposited 3000',
//   'Movement 5: You withdrew 650',
//   'Movement 6: You withdrew 130',
//   'Movement 7: You deposited 70',
//   'Movement 8: You deposited 1300'
// ]
