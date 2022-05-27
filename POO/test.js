// Ici, pas de programmation orientée objet (POO)
// Chaque nouvel objet "personne" est une quasi-copie d'un autre

const paul = {
    
    firstname: 'Paul',
    lastname: 'DUPONT',
    age: 31,

    sayHello: () => {
        console.log(`Bonjour. Je m'appelle ${paul.firstname} ${paul.lastname} et j'ai ${paul.age} ans`);
    }

};

paul.sayHello();

const maurice = {

    firstname: 'Maurice',
    lastname: 'DURAND',
    age: 52,

    sayHello: () => {
        console.log(`Bonjour. Je m'appelle ${maurice.firstname} ${maurice.lastname} et j'ai ${maurice.age} ans`);
    }

};

maurice.sayHello();

// On remarque que le code est redondant