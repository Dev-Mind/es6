'use strict';

define(['defaultparameter'], function() {

  describe('ES6 : default parameter', function () {

    it('should return 10 where no param', function() {
      expect(getValue()).toBe(10);
    });

    it('should return param where no param', function() {
      expect(getValue('toto')).toBe('toto');
    });
  });


});

