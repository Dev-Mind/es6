
/**
 * Concept : Destructuring assignment
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition
 * L'affectation par décomposition (destructuring en anglais) est une expression JavaScript qui permet d'extraire des données
 * d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.
 */

function getValues(){
  let [a, b, ...c] = [1, 2, 3, 4, 5];
  return {a, b, c};
}
