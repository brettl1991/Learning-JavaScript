// let js = "amazing";
// if (js == "amazing") alert("JavaScript is FUN!");

// 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// -------------------------------------------------------------

// let firstName = "Jonas";
// console.log(firstName);

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
// console.log(avarageAge); //32.5

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

//Driving licence age check calc

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving licence 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

//so inside this () if the condition true than after inside { this} will be executed
//with else inside {this } will be executed if false the condition above

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// ------------------------------------------------------------------------------------------------------

//Type conversion and Coercion (koersoon)
// Type conversion when we manually convert from one type to another, type coercion when JavaScript automatically
// converts types behind the scenes for us

//Type conversion
// const inputYear = "1991";
// console.log(inputYear + 18); //getting back 199118 not 2019, so first need to convert the string into a number
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas")); //NaN - means not a number, invalid number

// //Type coercion
// console.log("I am " + 23 + " years old"); //the + operators will convert numbers into strings
// console.log("23" - "10" - 3); //with minus operator converts strings to numbers (10)
// //but if we use + than converting the whole into string 23193
// console.log("23" * "2"); //46 converting into number
// console.log("23" / "2"); //11.5 converting into number
// console.log("23" > "18"); //true

// let n = "1" + 1; //11
// n = n - 1; //11-1
// console.log(n); //10

//---------------------------------------------------------------------------
//Truthy and Falsy
// Falsy values are values that are not exactly false but will become false when we try to convert them into a boolean
//5 falsy values: 0, '', undefinden, null, NaN

// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("Jonas")); //true
// console.log(Boolean({})); //true
// console.log(Boolean("")); //false

// const money = 0;
// if (money) {
//   //no matter what is inside( ) javascript will convert it to a boolean using the truthy and falsy rules
//   console.log("Dont spend it all ;)");
// } else {
//   console.log("You should get a job"); //this will be executed
// }

// let height;
// if (height) {
//   console.log("Yaaay! Height is defined");
// } else {
//   console.log("Height is undefined :("); //this will be executed
// }

//----------------------------------------------------------------------------------------------
//Equality Operators

// const age = 18;
// if(age === 18) console.log('You just become an adult (strict):D'); //dont confuse = equal to === this comparison operator
// //=== strict equality operator, it does not perform type coersion, returns true when both vales exact the same
//so when comparing values use strict equality operator
//so '18' === 18 going to be false

// //== loose equality opertaor which does type coersion '18' == 18 will give true, avoide to use this one as much as you can
// if(age == 18) console.log('You just become an adult (loose):D');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite)//here we getting a number as a string back

// if(favourite == 23) {
//     console.log('Cool! 23 is an amazing number.')//this will convert it to a number
// }

// if(favourite === 23) {
//     console.log('Cool! 23 is an amazing number.')//this will not giving back any message as first we need to convert it to a number
//     //just by adding number in fron tof prompt above
// }   else if(favourite === 7) {
//     console.log('7 is also a cool number!')
// }   else {
//     console.log('Number is not 23 or 7')
// }

// if(favourite !== 23) {
//     console.log('Why not the 23?') //this is the different operator, just make sure to use the strict version
// }

//Logical operators
// const hasDriversLicence = true; //A variable
// const hasGoodVision = true; //B variable
// console.log(hasDriversLicence && hasGoodVision); //and operator && result true
// console.log(hasDriversLicence || hasGoodVision); //or operator || result true
// console.log(!hasDriversLicence); //not operator  result false

// // if (hasDriversLicence && hasGoodVision) {
// //   console.log("Sarah is able to drive");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = true; //C variable
// console.log(hasDriversLicence || hasGoodVision || isTired);

// if (hasDriversLicence && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

//THE SWITCH STATEMENT

// const day = "monday";

// switch (day) {
//   case "monday": //day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to cooding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Writing code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

//write the above in logical operator
// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to cooding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Writing code examples");
// } else if (day === "thursday") {
//   console.log("Writing code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend");
// } else console.log("Not a valid day!");

//STATEMENT AND EXPRESSIONS
// expression is a piece of code that produces value:
// 3 + 4 or 1991 or true && !false && false
//The statement is a bigger piece of code that excecudted and does not produce a value

// if (23 > 10) {
//   const str = "23 is bigger";
// }

//THE CONDITIONAL (TERNARY) OPERATOR
//something similar like if else statemant but all in one line, has 3 parts (condition, if part, else part), mostly for quick decision but for
//more conditions we still you if else statement

const age = 23;
// age >= 18
//   ? console.log("I like to drink wine😁")
//   : console.log("I like to drink water 😊");

const drink = age >= 18 ? "wine😁" : "water😊";
console.log(drink);

//with if else:

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine😁" : "water😊"}`);
