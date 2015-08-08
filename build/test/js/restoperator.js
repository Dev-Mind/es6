"use strict";
function testRestOperator(first) {
  for (var myvalues = [],
      $__1 = 1; $__1 < arguments.length; $__1++)
    myvalues[$__1 - 1] = arguments[$__1];
  return {
    first: first,
    myvalues: myvalues
  };
}
