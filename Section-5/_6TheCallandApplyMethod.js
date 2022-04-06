'use strict';
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){} instead of this we using this
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, name` }); //adding new object to our bookings, so we gonna have 2 arrays with the below bookings
  },
};

lufthansa.book(239, 'Agnes Brettl'); //Agnes Brettl booked a seat on Lufthansa flight LH239
lufthansa.book(635, ' Acs Koma'); // Acs Koma booked a seat on Lufthansa flight LH635
console.log(lufthansa); //get back:
// {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [ { flight: 'LH239, name' }, { flight: 'LH635, name' } ],
//   book: [Function: book]
// }

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//we will create a new function call for the bookings to not repeat ourself in eurowings and use it
const book = lufthansa.book;

// book(23, 'Sarah Williams'); //we would get back cannot read property beacuse of the this keyword point to undefined and its really depends on how the function called, how we fix it to cerate bookings in both airline?
//3 way: call apply or bind method, so functions can have methods too

//call method

book.call(eurowings, 23, 'Sarah Williams'); //Sarah Williams booked a seat on Eurowings flight EW23
console.log(eurowings); //get back:
// {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [ { flight: 'EW23, name' } ]
// }

book.call(lufthansa, 239, 'AyyyB'); //AyyyB booked a seat on Lufthansa flight LH239
console.log(lufthansa); //get back:
// {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [
//     { flight: 'LH239, name' },
//     { flight: 'LH635, name' },
//     { flight: 'LH239, name' }
//   ],
//   book: [Function: book]
// }

//apply method: this not that used
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);

//instead we use call

book.call(eurowings, ...flightData); //George Cooper booked a seat on Eurowings flight EW583

//bind method: not immediately call the function, instead returns a new function where the this keyword is bind

//lets assume we need to use the book functuon for eurowings all the time
//book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams'); //Steven Williams booked a seat on Eurowings flight EW23

//function for only 23 flight
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Agnes Brettl'); //Agnes Brettl booked a seat on Eurowings flight EW23

//other situation to use bind method
//when we use objects together with eventlisteners
//so whenever we click new plane button buy a new plane (html)
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); //wil return: <button class="buy">Buy new plane 🛩</button> because this keyword in an event handler function always points to the element on which the element attached to
  this.planes++;
  console.log(this.planes); //get back NaN, because this keyword is the button element
};

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
//if we would call
// lufthansa.buyPlane() than the lufthansa.buyPlane object would called the function, so we need to manually define this keyword
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //301 when we click on that button, this point to lufthansa

//an other usecase for bind method: partial application(we can preset parameters)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220

//pre set the rate for always be 23%
const addVAT = addTax.bind(null, 0.23); //same as we would write
// const addVAT = value => value + value * 0.23;

console.log(addVAT(100)); //123

//challange:rewrite the above code by using a function returning an other function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100)); //123
