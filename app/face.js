/* Defines the Face object

   THe constructor recieves four values relative
   to the vertices of a given face.
*/
function Face(a, b, c, d){
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;

  this.normal = function(){
    var cb = [b.x - c.x, b.y - c.y, b.z - c.z];
    var cd = [d.x - c.x, d.y - c.y, d.z - c.z];

    var _normal = [
      (cd[1] * cb[2]) - (cb[2] * cb[1]),
      (cd[2] * cb[0]) - (cd[0] * cb[2]),
      (cd[0] * cb[1]) - (cd[1] * cb[0])
    ];
  }
}
