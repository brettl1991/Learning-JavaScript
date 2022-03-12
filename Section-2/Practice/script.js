//Functions
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people, and it's capital city is ${capitalCity}.`;
// }

// const descPortugal = describeCountry("Portugal", 10, "Lisbon");
// const descGermany = describeCountry("Germany", 83, "Berlin");
// const descFinland = describeCountry("Finland", 6, "Helsinki");
// console.log(descPortugal, descGermany, descFinland);

// Function Declarations vs. Expressions
// function percentageOfWorld1(population, country) {
//   return `${country} about ${
//     (population / 7900) * 100
//   }% of the world population.`;
// // }
// const germanyPopulation = percentageOfWorld1(83, "Germany");
// const portugalPopulation = percentageOfWorld1(10, "Portugal");
// const finlandPopulation = percentageOfWorld1(6, "Finland");
// console.log(germanyPopulation, portugalPopulation, finlandPopulation);

// const percentageOfWorld2 = function (population, country) {
//   return `${country} about ${
//     (population / 7900) * 100
//   }% of the world population.`;
// };

// const germanyPopulation = percentageOfWorld2(83, "Germany");
// const portugalPopulation = percentageOfWorld2(10, "Portugal");
// const finlandPopulation = percentageOfWorld2(6, "Finland");
// console.log(germanyPopulation, portugalPopulation, finlandPopulation);

//Arrow Functions
// const percentageOfWorld3 = (population, country) => {
//   return `${country} about ${
//     (population / 7900) * 100
//   }% of the world population.`;
// };

// const germanyPopulation = percentageOfWorld3(83, "Germany");
// const portugalPopulation = percentageOfWorld3(10, "Portugal");
// const finlandPopulation = percentageOfWorld3(6, "Finland");
// console.log(germanyPopulation, portugalPopulation, finlandPopulation);

//Function calling other function
// const percentageOfWorld1 = function (population) {
//   return (population / 7900) * 100;
// };

// const describePopulation = function (population, country) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is about ${
//     (population / 7900) * 100
//   }% of the world.`;
//   console.log(description);
// };

// describePopulation(83, "Germany");
// describePopulation(10, "Portugal");
// describePopulation(6, "Finland");

//Introduction to Arrays
// const populations = [83, 10, 6, 10];
// console.log(populations.length === 4);

// const percentageOfWorld1 = function (population) {
//   console.log(population);
//   return (population / 7900) * 100;
// };

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

//Basic Array Operations (Methods)
const neighbours = ["Spain", "Portugal", "Hunagry"];
const newCountry = neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log(`Probably not a central Europian country`);
}

neighbours[0] = "Malaysia";
console.log(neighbours);
