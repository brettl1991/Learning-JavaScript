'use strict';
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1

dogs.forEach(function (dog, i, arr) {
  // console.log(dog, i, arr);
  const recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  console.log(recommendedFood);
  dog['recommendedFood'] = recommendedFood;
});
// console.log(dogs);

//2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
  }  `
); //Sarah's dog is eating too much

//3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch); //[ 'Matilda', 'Sarah', 'John' ]
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle); //[ 'Alice', 'Bob', 'Michael' ]

//4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`); //Matilda and Sarah and John's dogs eat too much!
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat 
too little!`); //Alice and Bob and Michael's dogs eat too little!

//5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood)); //false

//6
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
); //true
// Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.

//7
const okay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(okay)); //true
console.log(dogs.filter(okay));
// [
//   {
//     weight: 32,
//     curFood: 340,
//     owners: [ 'Michael' ],
//     recommendedFood: 376
//   }
// ]

//8
const sorting = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sorting);
