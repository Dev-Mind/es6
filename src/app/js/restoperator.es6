
/**
 * Concept : rest operator
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/param%C3%A8tres_du_reste
 * permet de représenter un nombre indéfini d'arguments sous forme d'un tableau.
 */

function testRestOperator(first, ...myvalues){
  //we don't need the array arguments anymore

  return {first, myvalues};
}
