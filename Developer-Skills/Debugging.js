const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //3. FIX THE BUG
    value: Number(prompt('Degrees celsius')),
  };

  //2 FIND THE BUG
  // console.log(measurement); //so the problem appear when we log into the console that the value what we put in is a 'string', because the PROMPT FUNCTION ALWAYS RETURNS A STRING, no matter what we input!!!!

  //an other way to show objects in the console
  console.table(measurement);
  // console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
}; //1 IDENTIFY THE BUG
console.log(measureKelvin());

//Using DEBUGGER
const calcTempAmplitudeBug = function (temp1, temp2) {
  const temps = temp1.concat(temp2);
  console.log(temps);
  //lets printend we put here 0 by msitake
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//1.IDENTIFY THE BUG
console.log(amplitudeBug);
