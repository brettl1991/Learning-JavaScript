'use strict';

//filter method: use to filter for elements in the oroginal array which satisfy a certain condition

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//deposits only amount which are above 0
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements); //[200,  450, -400, 3000, -650, -130, 70, 1300]
console.log(deposits); //[ 200, 450, 3000, 70, 1300 ]

//with for of looop
const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor); //[ 200, 450, 3000, 70, 1300 ]

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals); //[ -400, -650, -130 ]
