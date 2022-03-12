"use strict";
//BASIC ARRAY OPERATIONS (METHODS)

//push method adds element to the end of the array
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends); //[ 'Michael', 'Steven', 'Peter', 'Jay' ]
console.log(newLength); //4

//unshift method that adds element ti the begginning of the array
friends.unshift("John");
console.log(friends);

//methods to remove elements from the arary
const popped = friends.pop(); //removes the last element of the array
console.log;
popped;
console.log(friends);

friends.shift(); //removes the first element
console.log(friends);

//tells which position a certain element in an array
console.log(friends.indexOf("Steven")); //1
console.log(friends.indexOf("Bob")); //-1 because the element is not there

//includes method, returns true if the elemnt is in the array and false if not
console.log(friends.includes("Steven")); //true
console.log(friends.includes("Bob")); //false
//we can use this method to write conditionals
if (friends.includes("Peter")) {
  console.log(`You have a friend call Peter!`);
} //You have a friend call Peter!
