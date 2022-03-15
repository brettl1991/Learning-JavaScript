"use strict";
const jonas = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "teacher",
  ["Michel", "Peter", "Steven"],
];
//backwards
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

//Loop inside a loop
//3 different excercises and we want to repeat them 5 times
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---------------Starting exercise ${exercise}`);
  //create repetation
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}😊`);
  }
}
