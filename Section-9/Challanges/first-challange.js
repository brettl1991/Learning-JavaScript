'use strict';
//1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//2.
Car.prototype.accelerate = function () {
  console.log((this.speed = this.speed + 10));
};

const bmw = new Car('BMW', 120);
bmw.accelerate(); //130
bmw.accelerate(); //140
bmw.accelerate(); //150

//3.
Car.prototype.brake = function () {
  console.log((this.speed = this.speed - 5));
};
bmw.brake(); //145

//4.
const mercedes = new Car('Mercedes', 95);
mercedes.accelerate(); //105
mercedes.brake(); //100
