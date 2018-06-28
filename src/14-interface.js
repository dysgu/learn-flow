// @flow

/* Interface Types */

interface Vehicle {
  color: string;
  hasFourDoor?: boolean;
}

class Car implements Vehicle {
  color: string;
  hasFourDoor: boolean;

  constructor() {
    this.hasFourDoor = false;
  }
}

class LuxuryCar implements Vehicle {
  color: string;
  hasFourDoor: boolean;
}

class Motorcycle implements Vehicle {
  color: string;
}

const car = new Car();
car.color = 'red';

const luxuryCar = new LuxuryCar();
luxuryCar.color = 'black';
luxuryCar.hasFourDoor = true;

const motorcycle = new Motorcycle();
motorcycle.color = 'silver';

console.log({ car, luxuryCar, motorcycle });
