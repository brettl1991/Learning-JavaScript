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
