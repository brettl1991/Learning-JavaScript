'use strict';
//set datastructure: collection of unique values (so never can ahve duplicates)
// to create a new set: most common iterables that takes in is an [] array, can hold mixed datatypes

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rizotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet); //all the duplicates gone
//Set(3) { 'Pasta', 'Pizza', 'Rizotto' }

console.log(new Set('Jonas')); //Set(5) { 'J', 'o', 'n', 'a', 's' }

//size of a set
console.log(ordersSet.size); //3

//certain element in a set or not
console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('Bread')); //false

//add new element to the set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); //Set(4) { 'Pasta', 'Pizza', 'Rizotto', 'Garlic Bread' }

//delete elements
ordersSet.delete('Rizotto');
console.log(ordersSet); //Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }

//there is no way getting values out of a set, because they are unique there is no need to retrive them, if you needed than you just need to use an array

//deleta all of the element of a set
// ordersSet.clear()

//we can loop over them

for (const order of ordersSet) console.log(order);

// Pasta
// Pizza
// Garlic Bread

//usecase for them: to remove duplicate values from an array
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique); //Set(3) { 'waiter', 'chef', 'manager' }
//conversion of a set to be array:
const staffUniqueNew = [...new Set(staff)];
console.log(staffUniqueNew); //[ 'waiter', 'chef', 'manager' ]

//how many unique positions they have
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
); //3

//how many different letter in a  string
console.log(new Set('Brettl').size); //5
