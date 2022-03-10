const bill = 430;

const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
console.log(
  `The bill was: ${bill}. The tip was:${tip}. The total was:${bill + tip}.`
);
