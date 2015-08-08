
/**
 * Concept : default parameter
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Valeurs_par_d%C3%A9faut_des_arguments
 * permet d'initialiser des paramètres lors de l'appel de la fonction si la valeur passée est nulle (au sens où il n'y a aucune valeur de passée) ou undefined.
 */
function getValue(test=10){
  return test;
}