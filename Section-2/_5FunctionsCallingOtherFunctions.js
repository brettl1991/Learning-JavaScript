'use strict';

//Using for many reason, mostly for DRY code!!!

//add a machine that cuts the fruit into 4 pieces
function cutFruitPieces(fruit) {
  return fruit * 4;
}
//we will use the above machine in our function below, so basically we call one function inside an other function
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
