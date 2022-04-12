'use strict';
//we might need a function which disspaers right after we called, so we want to execute immediately
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//immediately invoked function expression
//every time we need to protect our variables from overwritten by anyhow is good to use this
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})(); //This will never run again, we transforming into an expression

console.log(isPrivate); //global scope does not have access to innerscope

//another way
() => console.log('This will never run again')();

//this is the reason why iife are not is common use nowdays because if we want to create a scope for our data we can put it in a block like below
{
  const isPrivate = 23;
}

console.log(isPrivate); //we can not have still access
