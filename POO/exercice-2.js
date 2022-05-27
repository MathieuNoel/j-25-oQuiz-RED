// EXO 2

// Coder Person
// propriétés: firstname, lastname, age, state
// constructor(firstname, lastname, age)
// state = "vivant" (par défaut)
// methode toString() et sayHello()

// Coder une class Vampire qui hérite de Person
// constructor(firstname, lastname, age)
// state = "mort-vivant"

class Person {

    #firstname;
    #lastname;
    #age;
    #state = 'vivant';

    constructor(firstname, lastname, age) {
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#age = age;
    }

    toString() {
        return `Je m'apelle ${this.#firstname} ${this.#lastname}, j'ai ${this.#age} ans et je suis ${this.#state}`;
    }

    sayHello() {
        console.log(this.toString());
    }

    set state(value) {
        if (typeof value !== 'string') {
            throw new Error('Person.state must be a string!');
        }
        this.#state = value;
    }

}

const dominique = new Person('Dominique', 'Toreto', 40);

class Vampire extends Person {

    static nbVampire = 0;
    static vampires = [];

    constructor(firstname, lastname, age) {
        super(firstname, lastname, age);
        this.state = "mort-vivant";
        Vampire.nbVampire++
        Vampire.vampires.push({firstname, lastname, age});
    }

}

const dracula = new Vampire('Vlad', 'Dracula', 250);
console.log(Vampire.nbVampire);
const alucard = new Vampire('Alucard', 'Helsing', 200);
console.log(Vampire.nbVampire);

console.log(Vampire.vampires);

dracula.sayHello();