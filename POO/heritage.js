const Vehicule = require('./vehicule');

class Voiture extends Vehicule {

    constructor(enginePower) {
        super(4, enginePower)
    }

}

const nevada = new Voiture(160);
const r17 = new Voiture(90);

// console.log(nevada.enginePower);
// console.log(nevada.nbWheels);

class Moto extends Vehicule {

    constructor(enginePower) {
        super(2, enginePower)
    }

}

const yamaha = new Moto(80)

console.log('Moto yamaha >>>', yamaha.nbWheels, yamaha.enginePower)

class Peugeot504 extends Voiture {

    constructor() {
        super(110)
    }

}

const peugeot504 = new Peugeot504();
console.log('peugeot504 >>>', peugeot504.enginePower, peugeot504.nbWheels);