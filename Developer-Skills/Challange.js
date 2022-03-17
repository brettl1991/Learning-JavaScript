'use strict';
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

// my solution
// let temps = [17, 21, 23];
// const printForecast = function (arr) {
//   for (let i = 0; i < temps.length; i++) {
// console.log(
//   `...${arr[0]}℃  in 1 days ... ${arr[1]}℃  in 2 days ... ${arr[2]}℃  in 3 days ... `
// );//or
// console.log(`...${arr[i]} ℃  in ${i + 1} day${i > 0 ? 's' : ''}`);
//   }
// };

// printForecast(temps);
// temps = [12, 5, -5, 0, 4];
// printForecast(temps);

//other solution
//array transformed to strings, separated by ...
//what is the X days - index + 1
//Transform array into a string
//Transform each elementto string to ℃
//String need to contain day (index + 1)
//Add ... between elements and starts and end of string
//Log str to console
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
//mine is not good beacuse the days are not teh same, like in first data 3 days, in second data 5 days and we want the function to work in both arrays
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}℃  in  ${i + 1} days ... `;
  }
  console.log(' ...' + str);
};
printForecast(data1);
