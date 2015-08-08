'use strict';

define(['forof'], function() {

  describe('ES6 : forof', function () {

    it('For in', function() {
      var iterable = ['a', 'b','c'];


      for(var val in iterable){
        //console.log('index = %d, value = %s', val, iterable[val]);
      }
      //=>
      //index = 0, value = 'a'
      //index = 1, value = 'b'
      //index = 2, value = 'c'

      var myobject = {firstname : 'Guillaume', lastname : 'Dev-Mind'};
      for(var val in myobject){
        //console.log('property = %s, value = %s', val, myobject[val]);
      }
      //=>
      //index = firstname, value = 'Guillaume'
      //index = lastname, value = 'Dev-Mind'

    });


    it('For in aleternative -> forEach', function() {
      var iterable = ['a', 'b','c'];

      iterable.forEach(function(elt){
        //console.log('value = ' + elt);
      })
      //=>
      // value = a
      // value = b
      // value = c

      //for...in ne marche pas sur un objet
    });

    it('For in aleternative -> for...of', function() {
      forOf();
      //=> dans le premier cas
      // value = a
      // value = b
      // value = c

      //for...in ne marche pas sur un objet
    });
  });


});

