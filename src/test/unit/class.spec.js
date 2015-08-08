'use strict';

define(['class'], function() {

  describe('ES6 : class', function () {

    var player, winner;

    beforeEach(function(){
      player = new Player('Dev-Mind');
      player.firstname = 'Guillaume';
      winner = new Winner('Ehret');
      winner.firstname = 'Guillaume';
    });


    it('Class1', function() {
      expect(player.firstname).toBe('Guillaume');
      expect(player.lastname).toBe('Dev-Mind');
    });

    it('Class2', function() {
      expect(winner.firstname).toBe('Guillaume');
      expect(winner.lastname).toBe('Ehret');
    });
  });


});

