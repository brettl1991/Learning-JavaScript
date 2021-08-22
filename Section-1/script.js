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
// //Mathematical, aritmethical operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the powerof 3 so = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Brettl';
// console.log(firstName + ' ' + lastName);

// //assigmnet operator
// let x = 10 + 5; //15
// x += 10; //x = x + 10 = 25
// x *= 4; //x=x*4 = 100
// x++; //x = x +1 = 101
// x--; //x = x - 1 = 100
// console.log(x);

//comparison operators
// console.log(ageJonas > ageSarah); //true
// //we have < > <= >=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > - 2018);

// //Operator presedence: which operator executed

// let x, y;
// x = y = 25-10-5; //x = y=10, x=10 because first gonna do the mathematical from right to left than from left to right the equal (assignment)
// console.log(x, y);

// //avarage of 2 values
// const avarageAge = (ageJonas + ageSarah) / 2;
// console.log(avarageAge); //55.5

//----------------------------------------------------------------------------------------
//Strings and Template literals
// const firstName = "Agnes";
// const job = "Receptionist";
// const birthYear = 1991;
// const year = 2037;

// const agnes =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(agnes);

//using template string

// const agnesNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(agnesNew);

// //Backsticks
// console.log(`Just a regular string...`);

// //Multiline strings
// console.log("String with \n\
// multiple \n\
// lines"); //with template strings this is easier:

// console.log(`String
// multiple
// lines`);

//---------------------------------------------------------------------------------------

//Drivin licence age check calc

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving licence 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

//so inside this () if the condition tru than after inside { this} will be executed
//with else inside {this } will be executed if false the condition above

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
