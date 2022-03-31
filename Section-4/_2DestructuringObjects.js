'use strict';
//to destructure objects we use {}
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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    ); //Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 23:30
  },
};

//so we calling that func above and passing in an object of options, so we can destructure with the function straight away
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
//this is useful with applications when we fetch data from an API and we get it like an object
//we know that with objects the order of their elements does not matter so we don't need to manually skip elements like we did with arrays
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); //get back:
//Classico Italiano {
//   thu: { open: 12, close: 22 },
//   fri: { open: 11, close: 23 },
//   sat: { open: 0, close: 24 }
// } [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

//if we want to add new variable names to the property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); //same as above

//default values, in case if not exist
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); //[] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); //23 7

//nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); //11, 23

//many times in js we have a function with lot of parameters, and can be hard to know the order of the parameters, so instead to finding the parameters manually, we can just pass an object into the function as an argument and the function will immediately distructure that object (orderdelivery method) above.
