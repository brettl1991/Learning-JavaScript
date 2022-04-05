'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//attaching eventhandler to the button
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  //split the text into multiple pieces, getting back an array with 5 elements
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, str] of rows.entries()) {
    const [first, second] = str.toLowerCase().trim().split('_');
    // console.log(str, first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    //adding the green pipes to it
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
