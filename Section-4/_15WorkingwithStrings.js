'use strict';
const airline = 'Tap Air Portugal';
const plane = 'A320';

//we can get the charakter of a string in certain position

console.log(plane[0]); //A
console.log(plane[1]); //3
//all above strings how we get back so we need to convert them into number if we want back number
//we can do this directly on a string
console.log('B737'[0]); //B

//we can read the lenght
console.log(airline.length);
// or directly
console.log('B737'.length);

//strings also have methods like arrays
console.log(airline.lastIndexOf('r')); //10 (space also counts)

//one good use case to extract a part of a string using the slice method
console.log(airline.slice(4)); //Air Portugal, 4 is the position where the extraction should start
//impossible to mutate strings

console.log(airline.slice(4, 7)); //Air, so 7 is the end of the extraction
console.log(airline.slice(0, airline.indexOf(' '))); //extract first word, Tap
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal

console.log(airline.slice(-2)); //start extracting from the end: al
console.log(airline.slice(1, -1)); //AP Air Portuga

//we get an airplane seat and we need to log on to the console if it's a middle seat or not
const checkMiddleSeat = function (seat) {
  //B and E are middle seats, so we need to take last character and test if it's an E or B
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat🤷‍♂️');
  else console.log('You got lucky😎');
};

checkMiddleSeat('11B'); //You got the middle seat�‍♂️
checkMiddleSeat('23C'); //You got lucky�
checkMiddleSeat('3E'); //You got the middle seat�‍♂️

//changing a case for a string
console.log(airline.toLowerCase()); //tap air portugal
console.log(airline.toUpperCase()); //TAP AIR PORTUGAL

//fix capitalisation in a name
const passanger = 'jOnAS'; //should look like this: Jonas
const passangerLower = passanger.toLocaleLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect); //Jonas

//needs to compare user input email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim(); //remove all the whitespace both  ends of a string
console.log(trimmedEmail); //hello@jonas.io

//we can do this all in 1 step
const normalisedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalisedEmail); //hello@jonas.io
console.log(email === normalisedEmail);

//replace part of string
const priceGB = '288,97£'; //so replace to make valid in the US by changing the comma to . and the £ to $
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); //288.97$

const announcement =
  'All passangers come to boarding door 23. Boarding door 23!';

//change door to gate
console.log(announcement.replace('door', 'gate')); //All passangers come to boarding gate 23. Boarding door 23! targeting just the first word, and to target all we need to use regular expression

console.log(announcement.replace(/door/g, 'gate')); //g stands for global and we replaced all: All passangers come to boarding gate 23. Boarding gate 23!

//3 simple method that return booleans: includes, startswith, endswith

const planeNew = 'A320neo';
console.log(planeNew.includes('A320')); //true
console.log(planeNew.includes('Boeing')); //false
console.log(planeNew.startsWith('Air')); //false

//check if the current plane is part of the new airbus family
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family.');
} //not get logged as false

//practicecheck if a luggage of a certain passanger is allowed to be in the plane
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome on board!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife'); //You are not allowed on board
checkBaggage('I have some socks and a camera'); // Welcome on board!
checkBaggage('I have some snacks and a gun for protection'); //You are not allowed on board

//so it is important to first convert every data to lowercase!!!!!
