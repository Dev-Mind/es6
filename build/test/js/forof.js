"use strict";
function forOf() {
  var iterable = ['a', 'b', 'c'];
  var $__3 = true;
  var $__4 = false;
  var $__5 = undefined;
  try {
    for (var $__1 = void 0,
        $__0 = (iterable)[$traceurRuntime.toProperty(Symbol.iterator)](); !($__3 = ($__1 = $__0.next()).done); $__3 = true) {
      var val = $__1.value;
      {
        console.log('value = ' + val);
      }
    }
  } catch ($__6) {
    $__4 = true;
    $__5 = $__6;
  } finally {
    try {
      if (!$__3 && $__0.return != null) {
        $__0.return();
      }
    } finally {
      if ($__4) {
        throw $__5;
      }
    }
  }
}
