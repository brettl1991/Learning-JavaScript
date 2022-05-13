'use strict';

//1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log((this.speed = this.speed + 10));
};

Car.prototype.brake = function () {
  console.log((this.speed = this.speed - 5));
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//2.

EV.prototype = Object.create(Car.prototype);

const tesla = new EV('Tesla', 120, 23);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

tesla.chargeBattery(90); //115

//3.
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

//4.

tesla.brake();
tesla.accelerate(); //Tesla going at 135km/h, with a charge of 89%.
