// Design Pattern: Factory
// Objet PersonFactory qui permet de "fabriquer" des personnages sans avoir à réécrire tout le code associé
const PersonFactory = { // écrit en PascalCase

    // Fonction pour "fabriquer" un nouveau personnage
    makePerson: (firstname, lastname, age) => {

        let newPerson = {};

        newPerson.firstname = firstname;
        newPerson.lastname = lastname;
        newPerson.age = age;

        newPerson.sayHello = () => {
            console.log(`Bonjour. Je m'appelle ${newPerson.firstname} ${newPerson.lastname} et j'ai ${newPerson.age} ans`);
        };

        // Retourne 'newPerson' pour avoir accès aux paramètres et méthodes de 'newPersonne' depuis 'makePerson'
        return newPerson;

    }

}

// Création des personnage avec PersonFactory.makePerson
const paul = PersonFactory.makePerson('Paul', 'DUPONT', 31);
const maurice = PersonFactory.makePerson('Maurice', 'DURAND', 52);

// On a bien accès à sayHello
paul.sayHello();
maurice.sayHello();