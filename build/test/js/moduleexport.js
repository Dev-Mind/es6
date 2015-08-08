"use strict";
function myFunction1() {
  return 'myFunction1';
}
function myFunction2() {
  return 'myFunction2' + myFunction3();
}
function myFunction3() {
  return 'myFunction3';
}
Object.defineProperties(module.exports, {
  myFunction1: {get: function() {
      return myFunction1;
    }},
  myFunction2: {get: function() {
      return myFunction2;
    }},
  __esModule: {value: true}
});
