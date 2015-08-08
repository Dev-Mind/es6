/**
 * Concept : utilisation de Set
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Set
 * L'objet Set (Ensemble en français) permet de stocker des valeurs uniques, de n'importe quel type, que ce soit des valeurs d'un type primitif ou des objets.
 */

let user = {id: 1, name: 'Guillaume'};
let users = new Set();
users.set(user.id, user); // adds a user
users.has(user.id); //true
//users.size; //1
users.delete(user.id); // removes the user
