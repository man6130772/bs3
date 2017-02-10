 // define(function() {
 Array.prototype.toMap = function(index, length) {
     var map = {};
     for (var i = 0, size = this.length; i < size; i++) {
         map[this[i]] = 1;
     }
     return map;
 };
 // });
