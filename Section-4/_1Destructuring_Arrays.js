'use strict';

//Destructuring arrays means, unpacking values from an array or an object into separate variables, break a complex data structure down into smaller data structure
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
//without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];
//with destructuring we can declare all the variables at the same time, and we NOT restructuring, just unpacking them
const [x, y, z] = arr;
console.log(x, y, z); //2 3 4

// const [main, secondary] = restaurant.categories;
// console.log(main, secondary); //Italian Pizzeria
// //if we want just first and 3rd
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); //Italian Vegetarian

//if we want to switch the variables, so basically mutating variables
[main, secondary] = [secondary, main];
console.log(main, secondary); //Vegetarian Italian

//a function return an array and immediately destruct the result into different variables, so allow us to return multiple values from function
//write a function to order food:adding method to the restaurant object
const [starter, mainCourse] = restaurant.order(2, 0); //so we want element number 2 from the starterMenu, and 0 from the mainMenu
console.log(starter, mainCourse); //Garlic Bread Pizza

//what about if we have nested array? Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); //2 [ 5, 6 ]
//if we want all the idnividual values
const [i, , [j, k]] = nested;
console.log(i, j, k); //2 5 6

//default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); //undefined
//but if we set default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8 9 1
