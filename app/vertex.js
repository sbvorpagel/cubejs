/* Defines the Vertex object

   The constructor recieves three values x,y,z relative to
   coordinates in a three-dimensional space.
*/
function Vertex(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;

  this.updateVertex = function(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
  }

  this.vertex2array = function () {
    return [this.x, this.y, this.z, 1];
  }

  this.array2vertex = function (array) {
    this.x = array[0];
    this.y = array[1];
    this.z = array[2];
  }

}
