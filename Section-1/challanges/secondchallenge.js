const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;

const koalaScore1 = 88;
const koalaScore2 = 91;
const koalaScore3 = 110;

const dolphinAvarage = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
console.log(dolphinAvarage); //233.666666
const koalaAvarage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
console.log(koalaAvarage); //215.6666666

if (dolphinAvarage > koalaAvarage) {
  console.log("The winner is Dolphins!");
} else if (koalaAvarage > dolphinAvarage) {
  console.log("The winner is Koalas!");
} else if (koalaAvarage === dolphinAvarage) {
  console.log("Draw!");
}

if (dolphinAvarage > koalaAvarage && dolphinAvarage >= 100) {
  console.log("The winner is Dolphins!");
} else if (koalaAvarage > dolphinAvarage && koalaAvarage >= 100) {
  console.log("The winner is Koalas!");
} else if (
  koalaAvarage === dolphinAvarage &&
  dolphinAvarage >= 100 &&
  koalaAvarage >= 100
) {
  console.log("Draw!");
} else {
  console.log(`We don't have a winner!`);
}
