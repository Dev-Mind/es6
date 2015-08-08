'use strict';

define(['let'], function() {

  describe('ES6 : let', function () {

    it(' shematise "hoisting" and should return "Champion test"', function () {
      var player = {
        name : 'test',
        isChampion : true
      };

      expect(getChampionName1(player)).toBe('Champion test');
    });


    it(' shematise "hoisting" and should return "Champion test"', function () {
      var player = {
        name : 'test',
        isChampion : false
      };

      expect(getChampionName1(player)).toBe('test');
    });


    it(' shematise "hoisting" and should return "Champion test"', function () {
      var player = {
        name : 'test',
        isChampion : true
      };

      expect(getChampionName2(player)).toBe('Champion test');
    });

    it(' shematise "hoisting" and should return "Champion test"', function () {
      var player = {
        name : 'test',
        isChampion : false
      };

      expect(getChampionName2(player)).toBe('test');
    });
  });
});

