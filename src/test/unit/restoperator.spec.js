'use strict';

define(['restoperator'], function() {

  describe('ES6 : rest operator', function () {

    it('should ', function() {
      var ret = testRestOperator({name :'titi'}, {name :'titi'}, {name :'tata'});
      expect(ret.first).toEqual({name :'titi'});
      expect(ret.myvalues).toEqual([{name :'titi'}, {name :'tata'}]);

    });

  });


});

