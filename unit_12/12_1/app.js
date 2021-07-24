class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep'
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

const toyota = new Vehicle('Toyota', 'Camry', 2004)

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 4
    }
}

const myFirstCar = new Car('Honda', 'CRV', 2009)

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 2
    }
    revEngine() {
        return 'VROOM!!!';
    }
}

const myCycle = new Motorcycle('Harley', 'Hog', 2021)

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(carToAdd) {
        if (!(carToAdd instanceof Vehicle)) {
            return "Only vehicles allowed!";
          }
        if (this.vehicles.length < this.capacity) {
            this.vehicles.push(carToAdd);
            return 'Your vehicle is now in garage.'
        } else {
            return "Sorry we're full"
        }
    }
}

const myGarage = new Garage(3);