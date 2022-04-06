'use strict';
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtman',
  passport: 24739479284,
};

const checkIn = function (flightNum, passanger) {
  //number of the flight has changed, but we should not change paramaters in real life, not a good practice
  flightNum = 'LH999';
  passanger.name = 'Mr' + passanger.name;

  if (passanger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passprt!');
  }
};

checkIn(flight, jonas);
console.log(flight); //LH234, so did not changed to LH999
console.log(jonas); ////{name: 'MrJonas Schmedtman', passport: 24739479284} and here changed the name and alert poped up 'Check in'

//the flight is a primitive type as basically copied inside the function like flightNum = flight, but with jonas as this is an object and therefore reference type just the reference has been copied in to the function, but that reference itself still a value that contains a memory adress

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas); //will pop up wrong password alert, because now we have 2 functions that manipulating the same object
//this can create issues in real life

//2 terms when dealing with functions:
//passing by value or passing by reference, but JS dont have passing by reference, so basically we pass a reference to the function but we not passing by reference!!!
