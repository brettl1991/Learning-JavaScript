'use strict';
//placing all the array elements at one
const arr = [7, 8, 9];
//lets create a new array based on above but with some new elements in the beginning
//not good soloion
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray); //[ 1, 2, 7, 8, 9 ]

const newArr = [1, 2, ...arr]; //using spread operator to expand this array into all of its individual elements
console.log(newArr); //[ 1, 2, 7, 8, 9 ]

//log the individual elements of the array, if we need values from an array individually use spread operator
console.log(...newArr); //1 2 7 8 9

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); //[ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ] so we are creating here a new array from scratch here

//similar like destructuring, big difference is that the spread operator takes all the elements from the array and does not create new variables, so we can only uses in cases where otherwise we would write values separated by commas, works only on arrays or iterables( iterables are arrays, strings, maps, sets but NOT OBJECTS!), so we can only use this operator when building an array or when we pass values into a function, we can not use in template literal ``

// unpack a string
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters); //[
//   'J',  'o', 'n',
//   'a',  's', '',
//   'S.'
// ]

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 or more arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//use spread operator to pass arguments to a function
//we want to order pasta with exactly 3 ingredients
// const ingredients = [
//   prompt("Let's make pasta! Ingredient1?"),
//   prompt('Ingredient2?'),
//   prompt('Ingredient3?'),
// ];
// console.log(ingredients); //we get 3 pop up windows after each other to put input (we placed, a, b, c and we getting back in the console ["a", "b", "c"])
//ingredients will be that we putting in (mushrooms, aspargus, cheese)
// restaurant.orderPasta(...ingredients); //Here is your delicious pasta with mushrooms, aspargus and cheese.

// spread operators works on objects as well
//create new object with current data plus new data
const newRestaurant = { founding: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant); //{
//   founding: 1998,
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   starterMenu: [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ],
//   mainMenu: [ 'Pizza', 'Pasta', 'Risotto' ],
//   orderPasta: [Function: orderPasta],
//   founder: 'Guiseppe'
// }

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); //Ristorante Roma
console.log(restaurant.name); //Classico Italiano
