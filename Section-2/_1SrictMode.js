"use strict";

//this allow us to write more secure code, always use in the beginning of the script, also introduce a shortlist of variable names that are reserved for features that might be added to the language later
//makes it easier to avoid accidental errors, avoide us to introduce bugs to our code because of 2 reasons:
//1.forbids us to do certain things
//2.creating visible errors for us in certain situations, and without it js would fail silently

let hasDriversLicense = false;
const passTests = true;

if (passTests) hasDriverLicense = true; //directly left out 's'from hasDriverslicence to test withouth strict mode -  not giving back anything
//if we turn back on we get an error message: 'hasDriverLicense is not defined'
if (hasDriversLicense) console.log("I can drive");

const interface = "Audio"; //get error message because of interface: Unexpected strict mode reserved word
const private = 543; //it's also not going to work because of private reserved word
// const if = 23;//same
