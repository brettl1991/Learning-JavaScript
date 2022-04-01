'use strict';

//split and join
//most powerful string method is split (allow us to split a string in to multiple parts based on a devider sring)
console.log('a+very+nice+string'.split('+')); //[ 'a', 'very', 'nice', 'string' ] will split the string by + and store the string the element of a new array
console.log('Agnes Brettl'.split(' ')); //[ 'Agnes', 'Brettl' ]

const [firstName, lastName] = 'Agnes Brettl'.split(' ');

const newName = ['Mrs.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //Mrs. Agnes BRETTL

//capitalise first letter of the names
const capitaliseName = function (name) {
  const names = name.split(' '); //so this will be an array so now we can loop ver them
  const namesUpper = [];
  for (const word of names) {
    // namesUpper.push(word[0].toUpperCase() + word.slice(1)); or other way:
    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitaliseName('jessica ann smith davis'); //Jessica Ann Smith Davis
capitaliseName('agnes brettl'); //Agnes Brettl

//padding a string: to ad a number of character to the string until it has a certain desired lenght
const message = 'Go to gate 23';
console.log(message.padStart(25, '+')); //so should be the lenght 25, ++++++++++++Go to gate 23

console.log(message.padStart(25, '+').padEnd(30, '+')); //++++++++++++Go to gate 23+++++

//masking cc numbers
const maskCreditCard = function (number) {
  const str = number + ''; //the result will be a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(34260866024626980)); //*************6980
console.log(maskCreditCard(46653579954899220)); //*************9220

//Repeat method:repeat the same string multiple times
const message2 = 'Bad weather... All departures deleyed...';
console.log(message2.repeat(5)); //5 times above message

const plansInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};

plansInLine(5); //There are 5 planes in line �����
plansInLine(3); //There are 3 planes in line ���

//there are lot other methods(concat, reverse...)
