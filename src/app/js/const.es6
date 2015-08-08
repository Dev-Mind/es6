
/**
 * Concept : utilisation de const
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const
 * La déclaration const permet de créer une constante nommée accessible uniquement en lecture.
 */
function getConstantValue1(){
  const MY_EXAMPLE1 = 'toto';
  console.log(MY_EXAMPLE1);
  //MY_EXAMPLE1 = 'titi'; ==> ERROR on ne peut pas changer la valeur
  console.log(MY_EXAMPLE1);
  return MY_EXAMPLE1;
}

function getConstantValue2(){
  const MY_EXAMPLE1 = {};
  console.log(MY_EXAMPLE1);
  MY_EXAMPLE1.name = 'toto'; //si objet on peut changer le contenu
  console.log(MY_EXAMPLE1);
  return MY_EXAMPLE1;
}
