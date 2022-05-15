'use strict';

//1./2./3./4.
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
    return this;
  }
}

class EVCl extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian); //EVCl { make: 'Rivian', speed: 120, charge: 23 }

rivian.accelerate().chargeBattery(50).brake().accelerate();
//Rivian going at 155km/h, with a charge of 49%
