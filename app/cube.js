/* Defines the Cube object
   TODO
*/

var JUMP = 10;

function Cube() {
  this.c;
  this.faces;
  this.vertices;

  // X, Y, Z  = center
  this.createCube = function (x, y, z) {
    var a = new Vertex(x-JUMP, y, z-JUMP);
    var b = new Vertex(x, y, z-JUMP);
    var c = new Vertex(x, y, z-JUMP);
    var d = new Vertex(x, y-JUMP, z-JUMP);
    var e = new Vertex(x-JUMP, y-JUMP, z-JUMP);
    var f = new Vertex(x-JUMP, y, z);
    var g = new Vertex(x, y-JUMP, z);
    var h = new Vertex(x-JUMP, y-JUMP, z);

    this.vertices = [a, b, c, d, e, f, g, h];

    //teria que substituir essas letras por referêcias ao vetor vertices, ai
    //ao mudar os vertices (rotações etc) automáticamente se replicaria aqui.
    var f1 = new Face(a, b, c, d);
    var f2 = new Face(b, f, g, c);
    var f3 = new Face(f, e, h, g);
    var f4 = new Face(e, a, d, h);
    var f5 = new Face(a, e, f, h);
    var f6 = new Face(d, b, g, h);

    this.faces = [f1, f2, f3, f4, f5, f6];
  }

  this.updateColor = function(c) {
    this.c = c
  }

  this.cube2matrix = function () {
    var matrix = [];
    for (var i = 0; i < 6; i++) {
      aux = this.vertices[i].vertex2array();
      matrix.push(aux);
    }
    return matrix;
  }

}
