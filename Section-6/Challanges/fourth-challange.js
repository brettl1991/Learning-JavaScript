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
