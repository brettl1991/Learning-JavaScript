'use strict';
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//we can call forEach also on a map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

//we can call forEach also on a set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); //Set(3) { 'USD', 'GBP', 'EUR' }

currenciesUnique.forEach(function (value, _, map) {
  //_ means variable that is unnecessary
  console.log(`${value}: ${value}`);
});
//in sets there are not keys

//USD: USD
// GBP: GBP
// EUR: EUR
