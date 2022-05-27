// Class

class Person {

    // Le # permet de définir un paramètre comme étant PRIVÉ.
    // Ça veut dire qu'il est accessible uniquement au sein de la classe et non en dehors.
    // 
    #firstname = 'Paul';
    #lastname = 'DUPONT';
    #age = 31;

    constructor({firstname, lastname, age}) {
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#age = age;
    }

    // Getter // Accesseur
    get firstname() {
        return this.#firstname;
    }

    // Setter // Mutateur
    set firstname(value) {
        if (typeof value !== 'string') {
            // throw permet de retourner (comme un return) une erreur => Coupe le script
            throw new Error('Person.firstname must be a string!');
        }
        this.#firstname = value;
    }

    get lastname() {
        return this.#lastname;
    }

    get fullName() {
        return this.#firstname + ' ' + this.#lastname;
    }

    // sayHello() {
    //     console.log(`Bonjour. Je m'appelle ${this.firstname} ${this.lastname} et j'ai ${this.age} ans`);
    // }

}


const identity = {
    firstname: 'Paul',
    lastname: 'DUPONT',
    age: 31
}

const paul = new Person(identity);

console.log(paul.fullName)