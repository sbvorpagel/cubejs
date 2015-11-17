/* Defines the Vertex object

   The constructor recieves three values x,y,z relative to
   coordinates in a three-dimensional space.
*/
function Vertex(x, y, z){
  this.x = x;
  this.y = y;
  this.z = z;

  this.getVertex = function(){
    var vertex = [];

    vertex.push(this.x;
    vertex.push(this.y);
    vertex.push(this.z);

    return vertex;
  }

  this.updateVertex = function(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
