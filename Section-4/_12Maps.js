'use strict';
//maps another data structure, we can use to map values to keys, in maps the keys can be any type, and different from object that in object the keys only strings

//create map
const rest = new Map();
rest.set('name', 'Classico Italiano'); //than we pass in arguments
rest.set(1, 'Firenze');
//to calling the set method like this not only update the map that is called on, but also returns the map
console.log(rest.set(2, 'Lisbon')); //Map(3) { 'name' => 'Classico Italiano', 1 => 'Firenze', 2 => 'Lisbon' }

//to chain the next set, these update the map
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

//to read data from a map we use get method

console.log(rest.get('name')); //Classico Italiano             so name key mapped with Classico Italiano
console.log(rest.get(true)); //We are open :D                  so true key mapped with We are open :D

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //so we are asking if current time between 23 and 11
//We are open :D

//check the map has a certain element
console.log(rest.has('categories')); //true

//delete elements from map, which happens based on the key
rest.delete(2); //2nd map will gone lisbon Portugal
console.log(rest);

//size property
console.log(rest.size); //7

//remove all elements from a map
// console.log(rest.clear);

//we can use arrays and objects as mapkeys
const arr = [1, 2];
rest.set(arr, 'Test'); //we need to pass this arr otherwise with this rest.set([1, 2], 'Test') we would get back undefined
console.log(rest);
rest.set(document.querySelector('h1', 'Heading')); //gonna get back an object: key and value
// {
//   h1 => 'Heading';
//   key: h1;
//   value: 'Heading'
// }
console.log(rest.get(arr)); //Test
