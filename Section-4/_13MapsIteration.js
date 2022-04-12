'use strict';
//other method to create map, from scretch
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);

console.log(question);

//getting back
// Map(7) {
//   'question' => 'What is the best programming language in the world?',
//   1 => 'C',
//   2 => 'Java',
//   3 => 'JavaScript',
//   'correct' => 3,
//   true => 'correct✌',
//   false => 'try again'
// }

//but when we keep adding new elemnts to it still set method what we need to use

//convert object to map
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
};

const { openingHours } = restaurant;
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//getting back
// Map(3) {
//   'thu' => { open: 12, close: 22 },
//   'fri' => { open: 11, close: 23 },
//   'sat' => { open: 0, close: 24 }
// }

//iteration is possible on them
//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//getting back
// What is the best programming language in the world?
// Answer 1: C
// Answer 2: Java
// Answer 3: JavaScript

const answer = Number(prompt('Your answer'));
console.log(answer);

//print succes or error message
console.log(question.get(question.get('correct'))) === answer; //correct✌

//sometimes we need to convert back a map into an array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
