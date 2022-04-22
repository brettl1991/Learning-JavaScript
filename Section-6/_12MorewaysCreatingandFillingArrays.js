'use strict';
//we can generate arrays programmatically

//array constraction function
const x = new Array(7);
console.log(x); //create an array with 7 empty elements
//we can fill up the entire array
// x.fill(1);
// console.log(x); //[1, 1, 1, 1, 1, 1, 1]
//we can start to fill only at index 3, so we can specify a beging parameter where to starts and where to ends like index 5, fill method mutate the original array
x.fill(1, 3, 5);
console.log(x); //[ <3 empty items>, 1, 1, <2 empty items> ]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 4, 6);
console.log(arr); //[1,  2, 3, 4, 23, 23, 7]

//if we want to recreate from the first example
//Array.from function
const y = Array.from({ length: 7 }, () => 1);
console.log(y); //[1, 1, 1, 1, 1, 1, 1]

// create array from 1 to 7
const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z); //[1, 2, 3, 4, 5, 6, 7]
