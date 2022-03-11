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
const percentageOfWorld3 = (population, country) => {
  return `${country} about ${
    (population / 7900) * 100
  }% of the world population.`;
};

const germanyPopulation = percentageOfWorld3(83, "Germany");
const portugalPopulation = percentageOfWorld3(10, "Portugal");
const finlandPopulation = percentageOfWorld3(6, "Finland");
console.log(germanyPopulation, portugalPopulation, finlandPopulation);
