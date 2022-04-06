'use strict';
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
//greeterHey become a function so we can call
//closure
greeterHey('Jonas');
greeterHey('Steven');

//we can do all in one go
greet('Hello')('Acs koma');

//useful by functional programming

//challange re write above function using arrow function
const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('Bye')('Agnes');
