'use strict';

define(['templatestring'], function() {

  describe('ES6 : template string', function () {

    it('should return String', function () {
      expect(getWithoutTemplate('JavaScript', 'ES6')).toBe('I like JavaScript ES6');
    });


    it('should return String', function () {
      expect(getTemplate('JavaScript', 'ES6')).toBe('I like JavaScript ES6');
    });

    it('should return String', function () {
      expect(getTemplateMultiLine()).toBe('Ceci\nest un exemple\nde template sur plsuieurs lignes');
    });
  });
});

