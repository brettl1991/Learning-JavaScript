// let country = "Hungary";
// console.log(country);

// let continent = "Europe";
// console.log(continent);

let population = 10;
// console.log(population);

// let isIsland = false;
let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

language = "hungarian";
const country = "Hungary";
const continent = "Europe";
const isIsland = false;
// isIsland = true;

//Basic Operators
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// // const description1 =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;
// console.log(description1);

//Strings and Template Literals
// const description2 = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
// console.log(description2);

//Taking Decisions: if / else Statements
let avarage = 33 - population;
console.log(avarage);

if (population > 33) {
  console.log(`${country} population is above avarage.`);
} else {
  console.log(`${country} population is ${avarage} million below avarage.`);
}

//Type Conversion and Coercion
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); //23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143
