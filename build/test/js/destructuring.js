"use strict";
function getValues() {
  var $__2,
      $__3;
  var $__1 = [1, 2, 3, 4, 5],
      a = ($__2 = $__1[$traceurRuntime.toProperty(Symbol.iterator)](), ($__3 = $__2.next()).done ? void 0 : $__3.value),
      b = ($__3 = $__2.next()).done ? void 0 : $__3.value,
      c = $traceurRuntime.iteratorToArray($__2);
  return {
    a: a,
    b: b,
    c: c
  };
}
