"use strict";
//Another function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
// console.log(age1);

//Function expression
//anonymus function, so function without name
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

//Main difference between them is: we can call function declarations before you define it and your code will work just fine but with function expression, it's impossible and JavaScript will throw an error at you. So first we can write const age1 = calcAge1(1991); than define the function: function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
