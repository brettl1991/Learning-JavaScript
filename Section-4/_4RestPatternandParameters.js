'use strict';

//rest pattern
//does the opposite as the spread operator, collecting multiple elements (unused elements) and condens them into arrays, to pack elements into array
//rest because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 [ 3, 4, 5 ]

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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const [Pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherFood); //Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

//objects, so the remaining elements will be created in a new object instead of an array
//we want to create an object only for the weekdays
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //only containing weekdays: { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

//functions
//adding as many arguments as we want with rest pattern
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum); //getting back: 5
  // 17
}; //  25

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4); //getting back for console.log(numbers) above:
//[ 2, 3 ]
// [ 5, 3, 7, 2 ]
// [
//   8, 2, 5, 3,
//   2, 1, 4
// ]
const x = [23, 5, 7];
add(...x); //35

//adding oredrpizza method to our function above
restaurant.orderPizza('mushrooms', 'onions', 'spinach', 'olives'); //mushrooms
// [ 'onions', 'spinach', 'olives' ]
restaurant.orderPizza('mushrooms'); //mushrooms
// []
