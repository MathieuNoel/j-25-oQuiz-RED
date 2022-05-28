// EXO 1

// Créer une classe Vehicule
// Propriétés de la classe Vehicule: nbWheels, enginePower, isStarted

// Méthodes
// constructor(nbWheels, enginePower)
// isStarted est false par défaut
// getters et setters (accesseurs et mutateurs)
// start() et stop()
// toString() => "véhicule à X roues, de puissance Y, {est démarré | n'est pas démarré}"

// Option: conditions dans les setters

class Vehicule {

    #nbWheels;
    #enginePower;
    #isStarted = false;

    constructor(nbWheels, enginePower) {
        this.#nbWheels = nbWheels;
        this.#enginePower = enginePower;
    }

    get nbWheels() {
        return this.#nbWheels;
    }

    set nbWheels(value) {
        if (isNaN(value)) {
            throw new Error('Vehicule.nbWheels must be a number');
        }
        this.#nbWheels = value;
    }

    get enginePower() {
        const enginePw = this.#enginePower + ' chevaux';
        return enginePw;
    }

    set enginePower(value) {
        if (isNaN(value)) {
            throw new Error('Vehicule.enginePower must be a number');
        }
        this.#enginePower = value;
    }

    get isStarted() {
        return this.#isStarted;
    }

    start() {
        this.#isStarted = true;
    }

    stop() {
        this.#isStarted = false;
    }

    toString() {
        return `Véhicule à ${this.#nbWheels} roues, de puissance ${this.#enginePower} chevaux, ${this.#isStarted ? 'est démarré' : 'n\'est pas démarré'}`;
    }

}
console.log('LA!')
module.exports = Vehicule;