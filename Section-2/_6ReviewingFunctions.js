'use strict';
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };
// //convert to normal function expression
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = 2037 - birthYear; //next step to export this to an other functonality
//   const retirement = 65 - age;

//   //return retirement
//   return `${firstName} retires in ${retirement} years.`;
// };

//next step
const calcAge = function (birthYear) {
  //this birthyear is different than the other below variable
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement; //because of return the function exits here so no chance the below code will be reached, but if we move up one line it will be executed
    console.log(`${firstName} retires in ${retirement} years.`);
  } else {
    return -1; //this a number that show us clearly this has no meaning
    //because of return the function exits here so no chance the below code will be reached
    console.log(`${firstName} has alreday retired 😎`);
  }
};

console.log(yearsUntilRetirement(1950, 'Jonas'));

//3 types of functions we talked about

//function declarations that can be usedbefore it's declared
function calcAge(birthYear) {
  return 2037 - birthYear;
}

//Function expressions when a function valuestored in a variable
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

//Arrow function, that great for a quick line function, has no this keyword
const calcAge = birthYear => 2037 - birthYear;
