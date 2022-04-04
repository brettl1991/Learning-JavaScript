'use strict';

//3rd way
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//we want to take these property names out from the array instead of writing them manually below

openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//Starting

//Object literals are used to create an object in javascript. With ES6 The object in javascript can be initialized by directly using the variable name.
openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // 1st ES6 enhanced object literals, this taking the above object into reaturant object and creating here its property name
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // }, instead of this will work the same
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//2nd enhanced object literal to write methods - so we dont need to do it as a function expression by order above,
//3rd compute property names, instead of writing them out manually and literaly, compute means calculate(weekdays array)
