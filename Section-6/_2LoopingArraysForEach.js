'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//loop over in order to print a message for each movments

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); //Math.abs to remove the sign
  }
}

//get back
//You deposited 200
// You deposited 450
// You withdrew 400
// You deposited 3000
// You withdrew 650
// You withdrew 130
// You deposited 70
// You deposited 1300

movements.forEach(function (movement) {
  //requires a call back function in order to tell it what to do, technically forEach a higher-order function, the forEach method who calls that function on each iteration

  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`); //Math.abs to remove the sign
  }
}); //same as above

//if we want o acces the counter variable
//in for of loop:
for (const [i, movement] of movements.entries()) {
  //here first parameter is index, 2nd is the current array element
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`); //${i} is a number of the movement
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); //Math.abs to remove the sign
  }
}

//in forEach method:
movements.forEach(function (movement, i, arr) {
  //names not matter in parameters just the order: first always the current element , 2nd always current index, 3rd always the entire array that we looping over
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`); //${i} is a number of the movement
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); //Math.abs to remove the sign
  }
});

//Movement 1: You deposited 200
// Movement 2: You deposited 450
// Movement 3: You withdrew 400
// Movement 4: You deposited 3000
// Movement 5: You withdrew 650
// Movement 6: You withdrew 130
// Movement 7: You deposited 70
// Movement 8: You deposited 1300
// Movement 1: You deposited 200
// Movement 2: You deposited 450
// Movement 3: You withdrew 400
// Movement 4: You deposited 3000
// Movement 5: You withdrew 650
// Movement 6: You withdrew 130
// Movement 7: You deposited 70
// Movement 8: You deposited 1300

//when forEach and when for of?

//big difference from a forEach loop you can not break out, continue and break statement not work in here, always loop trough the entire array, so if you need to break out from a loop use for of otherwise personal choice
