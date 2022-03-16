"use strict";

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
const calcAvarage = (score1, score2, score3) => {
  score1 + score2 + score3 / 3;
};

let scoreeDolphin = calcAvarage(44, 23, 71);
let scoreKoala = calcAvarage(65, 54, 49);
console.log(scoreeDolphin, scoreKoala);

const checkWinner = function (avarageDolphin, avarageKoala) {
  if (avarageDolphin >= 2 * avarageKoala) {
    return `Dolphin wins (${avarageDolphin} vs ${avarageKoala})!`;
  } else if (avarageKoala >= 2 * avarageDolphin) {
    return `Koala wins (${avarageKoala} vs ${avarageDolphin})!`;
  } else {
    return `No team wins!`;
  }
};

console.log(checkWinner(scoreeDolphin, scoreKoala));

//for test data 2 we need to use let by the scores up there to be able to change them like this below
scoreeDolphin = calcAvarage(85, 54, 41);
scoreKoala = calcAvarage(23, 34, 27);
console.log(checkWinner(scoreeDolphin, scoreKoala));
checkWinner(scoreeDolphin, scoreKoala);
