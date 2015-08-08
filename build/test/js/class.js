"use strict";
var Player = function() {
  function Player(lastname) {
    console.log('_lastname' + lastname);
    this._lastname = lastname;
  }
  return ($traceurRuntime.createClass)(Player, {
    get lastname() {
      return this._lastname;
    },
    get firstname() {
      console.log('getter firstname');
      return this._firstname;
    },
    set firstname(newFirstanme) {
      console.log('%s firstname become %s', this._firstname, newFirstanme);
      this._firstname = newFirstanme;
    }
  }, {});
}();
var Winner = function($__super) {
  function Winner(lastname) {
    $traceurRuntime.superConstructor(Winner).call(this, lastname);
  }
  return ($traceurRuntime.createClass)(Winner, {}, {}, $__super);
}(Player);
