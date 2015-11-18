/* Defines the Cube object

   The constructor recieves seven values relative to
   faces and color.
*/
function Cube(f1, f2, f3, f4, f5, f6, c) {
  this.f1 = f1;
  this.f2 = f2;
  this.f3 = f3;
  this.f4 = f4;
  this.f5 = f5;
  this.f6 = f6;
  this.c = c;

  this.updateColor = function(c) {
    this.c = c
  }
}
