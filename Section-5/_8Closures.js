'use strict';

//a closure is not a feature we create manually, so we are not explicitly using it, creates automatically in certain situations we just need to recognise these situations
//makes a func remember all the variable that exist it at the function birthplace

//secret of closure: any function always has access to the variable environment of the excecusion context in which the function was created, even after that executioncontext gone,
//so gives a function access to all its variables of its parentsfunction,even afterthat parent function returned,

//the function keeps a reference to it's outer scope, which preservs the scope chain troughout the time,
//never loose connection to variables that existed at the function's birthplace
//closure has priority over the scope chain
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passangers`);
  };
};

const booker = secureBooking(); //so we this the secureBooking func has been executed, gone but with booker we still have access to it

booker(); //1 passangers
booker(); //2 passangers
booker(); //3 passangers

console.dir(booker); //to take a look into the function
