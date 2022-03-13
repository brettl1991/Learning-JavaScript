"use strict";
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, total);
