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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//with optional chaining if a certain property not exist than undefined returned immediately not other errors
// if (restaurant.openingHours) console.log(restaurant.openingHours.mon.open);//with this getting error: cannot read property 'open' of undefined

//with optional chaining
console.log(restaurant.openingHours.mon?.open); //only if monday exist than open property will be defined otherwise will be undefined
//get back undefined

console.log(restaurant.openingHours?.mon?.open); //undefined undefined

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//loop trough this array and log wheter the restaurant open on each days or not
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // //if we want to use a variable name as a prperty name we need to use []
  console.log(`On ${day}, we open at ${open}`);
}
// //getting back
// On mon, we open at undefined
// On tue, we open at undefined
// On wed, we open at undefined
// On thu, we open at 12
// On fri, we open at 11
// On sat, we open at 0
// On sun, we open at undefined

//but we dont want to get undefined, so let's use or above
//getting back
// On mon, we open at closed
// On tue, we open at closed
// On wed, we open at closed
// On thu, we open at 12
// On fri, we open at 11
// On sat, we open at 0
// On sun, we open at closed

//working with methods too, so we can check if a method exists before we calling
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); //[ 'Focaccia', 'Pasta' ]

//works on array, we can use to check if an array is empty
const users = [
  {
    name: 'Jonas',
    email: 'hellojanas@io.com',
  },
];
console.log(users[0]?.name ?? 'User array empty'); //Jonas
//this instead of useing if else statement
