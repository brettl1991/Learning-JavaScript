'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var milenial = true;
      //CreatingNEW variablewith same nameas outer scope'svariable
      const firstName = 'Steven'; //js look the variable name in teh current scope so changed jonas to steven
      //reassigningouter scope's variable
      output = 'NEW OUTPUT';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); //const and let variable block scoped , so only available inside the block they are created
    console.log(milenial); //return back true, var variables are function scoped, ignoring the block, and still we are in the same function
    add(2, 3); //not defined, functions are block scoped, only true for struct mode
    console.log(output); //we get NEW OUTPUT, we not cerated we just redifind the variable, otherwise will not give the NEW OUTPUT
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
console.log(age); //outer scope can't ahve acces to inner scope, but inner scope can have acces to outer scope
printAge(); //same reason as above
