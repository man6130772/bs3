 // define(function() {
 Array.prototype.remove = function(index, length) {
     if (this.length < index) {
         index = this.length;
     } else if (index < 0) {
         index = 0;
     }

     if (length > this.length) {
         length = this.length;
     } else if (length < this.length) {
        
     } else {
         length = 1;
     }
     this.splice(index, length);
     return this;
 };
 // });
