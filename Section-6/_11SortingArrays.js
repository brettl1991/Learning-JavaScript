'use strict';
//sorting: mutates the original array, does the sorting based on strings
const owners = ['Jonas', 'Zach', 'Adam', 'Marta'];
console.log(owners.sort()); //[ 'Adam', 'Jonas', 'Marta', 'Zach' ]

//Sorting arrays with numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort()); //if they would string this is correct down:

// [
//   -130, -400, -650,
//   1300,  200, 3000,
//    450,   70
// ]

//to fix this

//if we return < 0 A will be before B, so keep order
//if we return > 0 B will be before A, so switch order
//ascending order means we want to go from small to large numbers
// movements.sort((a, b) => {
//   ////a and b parameters: the first is the current value, 2nd is the next value
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
//or simply
movements.sort((a, b) => a - b);
console.log(movements);
// [
//   -650, -400, -130,
//     70,  200,  450,
//   1300, 3000
// ]

//Descending order
// movements.sort((a, b) => {
//   ////a and b parameters: the first is the current value, 2nd is the next value
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
//or simply
movements.sort((a, b) => b - a);
console.log(movements);
// [
//   3000, 1300,  450,
//    200,   70, -130,
//   -400, -650
// ]
