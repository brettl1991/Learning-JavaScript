'use strict';
//reduce method: "boils" all arrays elements down to one single value, like a "snowball effect"
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce(function (acc, mov, i, arr) {
  ////first parameter in call back function is the accumulator: keeps accumulating (osszegyujt, osszeszed) the value that we automatically want to return, so first always need to decide what we want the acc and the current value to be and how to interract in the function
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

//max value of the movements
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max); //3000

//practice
//take the movements deposit, converting them from EUR to $ and add them all up
//you can only chain methods if the first one returns an array
const eurToUsd = 1.1;
const totalDepositUSD = movements
  .filter(mov => mov > 0) //after filter if we want to check the filtered values we can check in the next array like this, so basically debugging:
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  //if we not curious we can use without the arr parameter
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);
