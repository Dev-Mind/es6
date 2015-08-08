'use strict';

define(['destructuring'], function() {

  describe('Test ES6 destructuring', function () {

    it('Should destructure table', function () {
      var ret = getValues();
      expect(ret.a).toBe(1);
      expect(ret.b).toBe(2);
      expect(ret.c).toEqual([3,4,5]);
    });
  });
});