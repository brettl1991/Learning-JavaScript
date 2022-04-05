'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassangers = 1, //price = 199 or
  price = 199 * numPassangers
) {
  //old way of setting default parameters ES5
  // numPassangers = numPassangers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //{ flightNum: 'LH123', numPassangers: undefined, price: undefined } so now we know these are falsy values so we cn use short circuting above, so we getting back with those default values this: { flightNum: 'LH123', numPassangers: 1, price: 199 }

createBooking('LH123', 2, 800); //{ flightNum: 'LH123', numPassangers: 2, price: 800 }
//we can even pass an other parameters inside them, like above with price = numPassangers * 199
createBooking('LH123', 5); //{ flightNum: 'LH123', numPassangers: 5, price: 995 }

//if you want to leave any default by calling them, otherwise we can't skip a default parameter
createBooking('LH123', undefined, 1000);
