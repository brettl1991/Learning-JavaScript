"use strict";

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
const calcAvarage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreeDolphin = calcAvarage(44, 23, 71);
const scoreKoala = calcAvarage(65, 54, 49);
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
