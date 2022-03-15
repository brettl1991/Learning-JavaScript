"use strict";
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];or
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7])); //12, here we test with or numbers

//so we can use the function to calculate the avarage of the totals
console.log(calcAverage(totals));
console.log(calcAverage(tips));
