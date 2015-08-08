/**
 * Concept : Arrow functions
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
 * permet d'avoir une syntaxe plus courte que les expressions de fonction et permet de lier la valeur this de
 * façon lexicale. Les fonctions fléchés sont obligatoirement anonymes.
 */

function testArrow(){
  let a = [
    'We\'re up all night \'til the sun',
    'We\'re up all night to get some',
    'We\'re up all night for good fun',
    'We\'re up all night to get lucky'
  ];

  a.forEach(a => console.log(a));

}

