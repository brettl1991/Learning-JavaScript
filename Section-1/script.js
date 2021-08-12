// let js = "amazing";
// if (js == "amazing") alert("JavaScript is FUN!");

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// -------------------------------------------------------------

// let firstName = "Jonas";
// console.log(firstName);

// //Exercise
// let country = "Hungary";
// console.log(country);

// let continent = "Europe";
// console.log(continent);

// let population = 10000000;
// console.log(population);

// ------------------------------------------------------------------------

/*Data types*/

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);

// javaScriptIsFun = 'YES!';
// console.log(typeof javaScriptIsFun);

// let year;//undifined value
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);//javascript console saying this is an object, this does not make any sense, this is an error, bug

//----------------------------------------------------------------------------

// Let/Const/Var

// let age = 30;
// age = 31;

// //using let if we want to reassign a value to a variable - so this variable can be mutated -,
// //using const that variable not supposed to change at any point - so immutable
// const birthYear = 1991;

// //var is an old way to decleare variables
// var job = 'programmer';
// job = 'teacher'

// //never decleare a variable like this:
// firstName = 'Agnes'

//-------------------------------------------------------------------------------------
//Basic Operators allows us to transform values or combine values
//Mathematical, aritmethical operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the powerof 3 so = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Brettl';
console.log(firstName + ' ' + lastName);

//assigmnet operator
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; //x=x*4 = 100
x++; //x = x +1 = 101
x--; //x = x - 1 = 100
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); //true
//we have < > <= >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > - 2018);
