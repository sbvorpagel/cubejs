/* Defines the Vertex object

   The constructor recieves three values x,y,z relative to
   coordinates in a three-dimensional space.
*/
function Vertex(x, y, z){
  this._x = x;
  this._y = y;
  this._z = z;

  this.x = function(){
    return this._x;
  }

  this.y = function(){
    return this._y;
  }

  this.z = function(){
    return this._z;
  }

  this.updateVertex = function(x, y, z){
    this._x = x;
    this._y = y;
    this._z = z;
  }

  this.getVertex = function() {
    return [this.x, this.y, this.z];
  }
}
