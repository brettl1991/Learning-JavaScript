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

let f;
let g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g(); //
f(); //46 (23*2)
console.dir(f); //inside func the closure has a value

//re assigned f function
h(); //
f(); ///1554
console.dir(f); //inside func the closure has b value

//example 2: timer
const boardPassangers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passangers`);
    console.log(`There are 3 groups, each with ${perGroup} passangers`);
  }, wait * 1000); //setTimeout need 2 parameters: a function which will be executed after a certain time, and the timer after will be called

  console.log(`Will start in boarding in ${wait} seconds`);
};

const perGroup = 1000; //wont use it because closure has priority over the scopchain and func will use inside perGroup variable not this
boardPassangers(180, 3); // Will start in boarding in 3 seconds
// We are now boarding all 180 passangers
// There are 3 groups, each with 60 passangers
