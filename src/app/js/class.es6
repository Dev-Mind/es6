/**
 * Concept : utilisation de const
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * JavaScript classes are introduced and are syntactical sugar over JavaScript's existing prototype-based inheritance.
 * The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JS classes provide a much simpler and
 * clearer syntax to create objects and dealing with inheritance.
 */
class Player {
  constructor(lastname) {
    console.log('_lastname' + lastname);
    this._lastname = lastname;
  }

  get lastname() {
    return this._lastname;
  }

  get firstname() {
    console.log('getter firstname');
    return this._firstname;
  }

  set firstname(newFirstanme) {
    console.log('%s firstname become %s', this._firstname, newFirstanme);
    this._firstname = newFirstanme;
  }
}

class Winner extends Player {
  constructor(lastname) {
    super(lastname);
  }
}
