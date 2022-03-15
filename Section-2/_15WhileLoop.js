// "use strict";
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}😊`);
// }
//for the while loop we can only specify a codition, only run while "this" condition is true, can be used in a larger variaty of situation, because it does not really need a counter just the condition which needs to stay trough to running
let rep = 1;
while (rep <= 10) {
  console.log(`While: Lifting weights repetition ${rep}😊`);
  rep++;
}
//example which not depend on a counter
//roll a dice until we roll a 6
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice); //we get a random number
//until we get 6 rolling
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
