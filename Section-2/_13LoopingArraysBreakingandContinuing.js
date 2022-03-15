"use strict";
const jonas = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "teacher",
  ["Michel", "Peter", "Steven"],
  true,
];

//read values from an array:
// console.log(jonas[0]);
// console.log(jonas[1]);
// //....
// console.log(jonas[4]);
//jonas[5] does NOT exist so i should stay below 5

//loop trough this array, log this 5 elemnts to the console
//i is a traditional counter variable name, let i = 0 because arrays are 0 based
//create a new array based on the values in one original array above starting with an empty array
const types = [];
for (let i = 0; i < jonas.length; i++) {
  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
  //Filling types array
  // types[i] = typeof jonas[i];
  //another way
  types.push(typeof jonas[i]);
}
console.log(types);

//Example
const years = [1991, 2007, 1969, 2020]; //we want to calculate the ages for all these birthyear and want to store them in an array
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//Continue and break statement
//contineu is to exit the current iteration of the loop and continue to the next one, break is used to completaly terminate the whole loop
//print out just strings:
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue; //this will exit than goes to the next one and if no more than after this not going to be runned the rest down below

  console.log(jonas[i], typeof jonas[i]);
}

//Break with number
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break; //after found the first number nothing will be printed

  console.log(jonas[i], typeof jonas[i]);
}
