'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const scoredNames = [...game.scored];

for (const [i, el] of scoredNames.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

// Goal 1: Lewandowski
// Goal 2: Gnarby
// Goal 3: Lewandowski
// Goal 4: Hummels

// //2

// const { odds } = game;
// const entries = Object.values(odds);
// console.log(entries);

// const sumValues = entries.reduce((a, b) => a + b);

// console.log(`The avarage odd ${sumValues / entries.length}.`);

//other solution
const odds = Object.values(game.odds);
let avarage = 0;
for (const odd of odds) avarage += odd;
avarage /= odds.length;

console.log(avarage);

// 3.6933333333333334

//3
const oddsEntries = Object.entries(game.odds);
console.log(oddsEntries);

for (const [key, value] of oddsEntries) {
  console.log(key);
  console.log(value);
  const victoryOrDraw = key === 'x' ? `draw` : `victory ${game[key]}`;
  console.log(`Odd of ${victoryOrDraw} ${value} `);
}

//

//4
const scorers = {};
for (const name of game.scored) {
  console.log('name', name);
  scorers[name] = scorers[name] ? scorers[name] + 1 : 1;
}

console.log('scorers:', scorers);
