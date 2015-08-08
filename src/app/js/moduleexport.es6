/**
 * Concept : module
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/export
 * L'instruction export est utilisée pour permettre à un script signé de fournir des propriétés, des fonctions et des objets à d'autres scripts (signés ou non).
 */

//ES6
export function myFunction1(){
  return 'myFunction1';
}

export function myFunction2(){
  return 'myFunction2' + myFunction3();
}

function myFunction3(){
  return 'myFunction3';
}