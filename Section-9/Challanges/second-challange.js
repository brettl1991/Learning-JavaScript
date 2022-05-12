'use strict';
//1.

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log((this.speed = this.speed + 10));
  }

  brake() {
    console.log((this.speed = this.speed - 5));
  }

  //2.
  get speedUs() {
    return this.speed / 1.6;
  }

  //3.
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCL('Ford', 120);
console.log(ford.speedUs); //75
ford.accelerate();
ford.brake();

//4.
ford.speedUs = 50;
console.log(ford); //CarCL { make: 'Ford', speed: 80 }
