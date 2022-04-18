'use strict';
//reduce method: "boils" all arrays elements down to one single value, like a "snowball effect"
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function (acc, mov, i, arr) {
  ////first parameter in call back function is the accumulator: keeps accumulating (osszegyujt, osszeszed) the value that we automatically want to return
  console.log(`Iteration ${i}: ${acc}`);
  //Iteration 0: 0
  // Iteration 1: 200
  // Iteration 2: 650
  // Iteration 3: 250
  // Iteration 4: 3250
  // Iteration 5: 2600
  // Iteration 6: 2470
  // Iteration 7: 2540
  return acc + mov;
}, 0); //0 is the initial value of the accumulator, we decide the number

console.log(balance); //3840

//with for of loop
let balance2 = 0; //initial accumulator value
for (const mov of movements) balance2 += mov;
console.log(balance2); //same

//with arrow function
const balance3 = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balance3); //same
