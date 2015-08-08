
/**
 * Concept : utilisation de for...of
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of
 * permet de créer une boucle qui parcourt un objet itérable (ce qui inclue les objets Array, Map,
 * Set, l'objet arguments, etc.) et qui permet d'exécuter une instruction pour la valeur de chaque propriété.
 */


function forOf(){
  var iterable = ['a', 'b','c'];

  for(var val of iterable) {
    console.log('value = ' + val);
  }
  //=>
  // value = a
  // value = b
  // value = c

}

