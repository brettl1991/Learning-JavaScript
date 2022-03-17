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
