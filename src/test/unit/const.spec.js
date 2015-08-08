'use strict';

define(['const'], function() {

  describe('ES6 : const', function () {

    it('Const can t be updated', function() {
      expect(getConstantValue1()).toBe('toto');
    });

    it('Const with objet can be updated', function() {
      expect(getConstantValue2()).toEqual({name:'toto'});
    });
  });


});

