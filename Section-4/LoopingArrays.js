'use strict';
//the for-of loop, we can use this instead of for loop and dont need to worry about the counter and conditions, plus we can still use the continue and break keywords
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); //Focaccia
// Bruschetta
// Garlic Bread
// Caprese Salad
// Pizza
// Pasta
// Risotto

//if we want the current index and not just the current element
for (const item of menu.entries()) {
  console.log(item);
}
//getting back
// [ 0, 'Focaccia' ]
// [ 1, 'Bruschetta' ]
// [ 2, 'Garlic Bread' ]
// [ 3, 'Caprese Salad' ]
// [ 4, 'Pizza' ]
// [ 5, 'Pasta' ]
// [ 6, 'Risotto' ]
console.log(...menu.entries()); //[ 0, 'Focaccia' ] [ 1, 'Bruschetta' ] [ 2, 'Garlic Bread' ] [ 3, 'Caprese Salad' ] [ 4, 'Pizza' ] [ 5, 'Pasta' ] [ 6, 'Risotto' ]

//destructuring the elements
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//getting back
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto
