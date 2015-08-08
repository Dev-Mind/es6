/**
 * Concept : utilisation de Map
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map
 * L'objet Map représente un dictionnaire, autrement dit une carte de clés/valeurs.
 * N'importe quelle valeur valable en JavaScript (que ce soit les objets ou les valeurs de types primitifs)
 * peut être utilisée comme clé ou comme valeur.
 */

let user = {id: 1, name: 'Guillaume'};
let users = new Map();
users.set(user.id, user); // adds a user
users.has(user.id); //true
//users.size; //1
users.delete(user.id); // removes the user
