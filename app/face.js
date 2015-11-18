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
    var bc = [c.x - b.x, c.y - b.y, c.z - b.z];
    var ba = [a.x - b.x, a.y - b.y, a.z - b.z];
    var normal = [
      (bc[1] * ba[2]) - (ba[2] * ba[1]),
      (bc[2] * ba[0]) - (bc[0] * ba[2]),
      (bc[0] * ba[1]) - (bc[1] * ba[0])
    ];
    var m_normal = Math.sqrt(
      Math.pow(normal[0], 2) + Math.pow(normal[1], 2) + Math.pow(normal[2], 2)
    );
    var n_normal = [normal[0]/m_normal, normal[1]/m_normal, normal[2]/m_normal];
    return n_normal;
  }

}
