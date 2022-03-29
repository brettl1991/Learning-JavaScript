'use strict';
// || operator (or operator)
//they can use and return any datatype, and they can do short-circuting
//short-circuting the first true value
console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); //'Jonas'
console.log(true || 0); //true
console.log(undefined || null); //null (here both falsy but will return the last value always)

console.log(undefined || 0 || '' || 'hello' || 23 || null); //hello

//want to define a variable based on the number of guests and we want to set a default value if it does not exist

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //10 because the numGuests not exist
const guests2 = restaurant.numGuests || 10;
console.log(guests2); //10

//and operator &&: short-circuit when the first value is falsy, and returns that falsy value or the last value if all of them true
console.log(0 && 'Jonas'); //0
console.log(7 && 'Jonas'); //Jonas
console.log('hello' && 23 && null && 'jonas'); //null

//if we want to check if a value or property exist
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach'); //mushrooms
  // [ 'spinach' ]
}

//with &&
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
//mushrooms
// [ 'spinach' ]
