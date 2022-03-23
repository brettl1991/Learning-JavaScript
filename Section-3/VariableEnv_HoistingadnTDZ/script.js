'use strict';

//hoisting with variables
console.log(me); //undifined, variables declared with var are hoisted with undefined result
console.log(job); //Cannot access 'job' before initialization, they are still in TDZ(variable delcared with let or const and start from the beginning of the scope until the point where the variable defined)
console.log(birthYear); //Cannot access 'job' before initialization, they are still in TDZ(variable delcared with let or const and start from the beginning of the scope until the point where the variable defined)

var me = 'jonas';
let job = 'teacher';
const birthYear = 1991;

//hoisting with functions
console.log(addDecl(2, 3)); //5
console.log(addExpression(2, 3)); //Cannot access 'addExpression' before initialization, they are still in TDZ
console.log(addArrow(2, 3)); //Cannot access 'addExpression' before initialization, they are still in TDZ

function addDecl(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted!');
} //getting back all products deleted even though products are declered

//always declere variable first on top of your code and also declare function first
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //true, so variables declared with var will create a property on the global window object
console.log(y === window.y); //false
console.log(z === window.z); //false
