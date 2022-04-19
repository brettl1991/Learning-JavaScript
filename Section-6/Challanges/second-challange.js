'use strict';
//Data 1: [5, 2, 4, 1, 15, 8, 3]
const dogAge1 = [5, 2, 4, 1, 15, 8, 3];
//Data 2: [16, 6, 10, 5, 6, 1, 4]
const dogAge2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
  const exclude = humanAges.filter(age => age >= 18);
  console.log(exclude);
  const avarageHuman =
    // exclude.reduce((acc, age) => acc + age, 0) / exclude.length;
    //or
    exclude.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(avarageHuman);
};

calcAverageHumanAge(dogAge1);
