"use strict";
function getConstantValue1() {
  var MY_EXAMPLE1 = 'toto';
  console.log(MY_EXAMPLE1);
  console.log(MY_EXAMPLE1);
  return MY_EXAMPLE1;
}
function getConstantValue2() {
  var MY_EXAMPLE1 = {};
  console.log(MY_EXAMPLE1);
  MY_EXAMPLE1.name = 'toto';
  console.log(MY_EXAMPLE1);
  return MY_EXAMPLE1;
}
