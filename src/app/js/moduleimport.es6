/**
 * Concept : module
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import
 * L'instruction import est utilisée pour importer des fonctions exportées depuis un module externe ou un autre script.
 */

import {myFunction1, myFunction2} from 'moduleexport.js';

function testModule(){
  return myFunction1() + myFunction2();
}
