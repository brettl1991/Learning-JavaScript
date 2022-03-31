'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//originally would be 10 as || operator will return true value but with nullish operator, which working with a concept of nullish values(null and undefined)
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); //getting 0
