// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//solving a problem
//we are working for a company building smart home thermometer. Our most recent task is this:
//Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//understaning the problem
//what is temperature amplitude? - difference between the highest and lowest temperature in the array
//How to compute the max and min temp? -
//what is a sensor error? and what to do? - ignore

//Breaking up into smaller sub problems
//How to ignore errors? - use contineue keyword
//Find max value in temp array!
//Find min value in temp array!
//Subtract min from max(amplitude) than return it!

const calcTempAmplitude = function (temps) {
  let max = temps[0]; //we just assume the fisrt element is the max for the array as here we did not loop them trough yet
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; //this will ignore the error
    if (curTemp > max) max = curTemp; //if the current value of the array > than the max than it become the max value, if not > move to the next iteration of the loop
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]); //testing our function

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//manager says we should get 2 temperatures not just one
//with 2 arrays should we implement the functionality twice? - No! Just merge 2 arrays.

//How to merge 2 arrays?
const calcTempAmplitudeNew = function (temp1, temp2) {
  const temps = temp1.concat(temp2); //how to merge 2 arrays
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]); //[ 3, 5, 1, 9, 0, 5 ] merge 2 in 1 array
console.log(amplitudeNew);
