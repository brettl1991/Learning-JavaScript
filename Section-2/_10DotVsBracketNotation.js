"use strict";
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michel", "Peter", "Steven"],
};
console.log(jonas);

//first way getting a property from an object is using the  DOT notation
//we want to get the lastname
console.log(jonas.lastName); //or

//Bracket notation
console.log(jonas["lastName"]); //main difference here we can put any expression like:
const nameKey = "Name";
console.log(jonas["first" + nameKey]); //Jonas
console.log(jonas["last" + nameKey]); //Schmedtman

// const intrestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(jonas[intrestedIn]); //we getting back teacher becuse intrestedIn will be store our answer for instance job but if we want to use the dot notation:
//console.log(jonas.inrestedIn); we getting back undifiend because there is no intrestedIn property in jonas

//when the user trying to access a property which is does not exist we can create a logic which will create a custom stringso the user can acces to the property

if (jonas[intrestedIn]) {
  console.log(intrestedIn);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends!"
  );
}

//using dot and bracket notation to add new prperties to the object
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

//Practice: Jonas has 3 friends and his best friend is called Michael. Get this sentence but without hardcoding any of this values.
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`
);
