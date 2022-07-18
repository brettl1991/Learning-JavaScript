'use strict';

//Inheritance
const ed = 100;
const you = ed;
const howMuchMoreYouHave = you + 50;
console.log(howMuchMoreYouHave); //150

//---
//Arrays and object keep a reference in memory when we want to copy or modify them
const initialUsers = ['john', 'traversy', 'ed'];
// const currentUsers = initialUsers; //but not copied over just references is!!!
// currentUsers.push('Florin Pop', 'Net Ninja');
// console.log(currentUsers); //[ 'john', 'traversy', 'ed', 'Florin Pop', 'Net Ninja' ]
// console.log(initialUsers); //same as above:because we modified the original, do not do this if you want to avoid to modifie something you dont want

// in react this case we just spread out
const currentUsers = [...initialUsers];
currentUsers.push('Florin Pop', 'Net Ninja');
console.log(initialUsers); //[ 'john', 'traversy', 'ed' ] and this is the right as we dont want the original to be modified
console.log(currentUsers);

// ---
//In react we using arrow functions
// const sayHello = name => {
//   console.log(`Hey ${name}`);
// };

// sayHello('ed');
//or we can return as well
const sayHello = name => {
  return `Hey ${name}`;
}; //if we dont have code just simple return we can even leave the {} from the function

const greeting = sayHello('ed');
console.log(greeting);
