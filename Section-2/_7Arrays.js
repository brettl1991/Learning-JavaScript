"use strict";

//arrays are data structure, a big container where we can throw variables and later we can reference them,
//in js 2 most important date structures are arrays and objects

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

//create array
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

//an other way to create
const y = new Array(1991, 1984, 2088, 2020);

//first element of friends array
console.log(friends[0]); //arrays are 0 based (first element 0, 2nd is 1...)

//number of elements that in the array
console.log(friends.length); //3

//last element in the array
console.log(friends[friends.length - 1]); //Peter

//put Jay instead of Peter
friends[2] = "Jay";
console.log(friends); //[ 'Michael', 'Steven', 'Jay' ]
//arrays can be mutated, but we can not replace the entire array

//array containes different values
const firstName = "Jonas";
const jonas = [firstName, "Schmedtman", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//array excersise, calc age for 1st, 2nd and last element
const calcAge = function (birthyear) {
  return 2037 - birthyear;
};
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

//we can place functio calls into an array because they also produces values
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
