'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const { openingHours } = restaurant;

//property names
const properties = Object.keys(openingHours);
console.log(properties); //['thu', 'fri', 'sat']
//how many days the restaurant is open
let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  console.log(day); ////thu, fri, sat
  openStr += `${day},`;
}
console.log(openStr); // We are open on 3 days: thu, fri, sat

//property values

const values = Object.values(openingHours);
console.log(values);
//[
//   { open: 12, close: 22 },
//   { open: 11, close: 23 },
//   { open: 0, close: 24 }
// ]

//entrie object
const entries = Object.entries(openingHours);
// console.log(entries);
// [
//   [ 'thu', { open: 12, close: 22 } ],
//   [ 'fri', { open: 11, close: 23 } ],
//   [ 'sat', { open: 0, close: 24 } ]
// ]
for (const x of entries) {
  console.log(x);
}

// [ 'thu', { open: 12, close: 22 } ]
// [ 'fri', { open: 11, close: 23 } ]
// [ 'sat', { open: 0, close: 24 } ]

//[key, value]

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
//On thu we open at 12 and close at 22
// On fri we open at 11 and close at 23
// On sat we open at 0 and close at 24
