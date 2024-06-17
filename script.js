class Vehicle {
    constructor (make, model, year) {
        if (!Number.isFinite(year) || year <= 0 ) {
            throw new Error('nope')
        }
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "beep"
    }
    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Garage {
    constructor(cap) {
        this.capacity = cap;
        this.vehicles = [];
    }
    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
          }
          if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
          }
          this.vehicles.push(vehicle);
          return "Vehicle added!";
    }
}

class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
    }
    numWheels = 4;
}

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
    }
    revEngine(){
        return 'VROOM!!!'
    }
    numWheels = 2;
}
