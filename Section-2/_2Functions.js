"use strict";

//a piece of code that we can reuse over and over again in our code

// all functions works the same way: they are receive input data, transform data and output data
//a variable can hold a value but the function can hold more lines of code
//functions allow us to write more maintanable code, reusable code so we dont need to write it again and again, so we should keep our code DRY - means don't repeat yourself!
//console.log also a function, built in function

//inside {} is the function body which will be executed when we run our code
function logger() {
  console.log("My name is Jonas");
}

//calling, running or invoking the function - all means the same
//we can call as many times as we want
logger();
logger();
logger();

//parameters inside function(parameters) - these are variables that are specific only to this function and they will get defind when we call the function, placeholders to receive input values
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0); //these actual values of the parameters called arguments
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); //Juice with 5 apples and 0 oranges.
//or with this we get the same:
console.log(fruitProcessor(5, 0)); //Juice with 5 apples and 0 oranges. In this case we not captured a value in any variable like above like const applejuice, we just logged that into the console.

//re use the function
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); //Juice with 2 apples and 4 oranges.
