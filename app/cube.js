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
    console.log("criação do cubo");
    var a = new Vertex(x-JUMP, y+JUMP, z-JUMP);
    console.log(a);
    var b = new Vertex(x+JUMP, y+JUMP, z-JUMP);
    console.log(b);
    var c = new Vertex(x+JUMP, y-JUMP, z-JUMP);
    console.log(c);
    var d = new Vertex(x-JUMP, y-JUMP, z-JUMP);
    console.log(d);
    var e = new Vertex(x-JUMP, y+JUMP, z+JUMP);
    console.log(e);
    var f = new Vertex(x+JUMP, y+JUMP, z+JUMP);
    console.log(f);
    var g = new Vertex(x+JUMP, y-JUMP, z+JUMP);
    console.log(g);
    var h = new Vertex(x-JUMP, y-JUMP, z+JUMP);
    console.log(h);
    console.log("fim criação do cubo");
    //só tem que confirmar se está na ordem certa e tb se é antihorário
    this.vertices = [a, b, c, d, e, f, g, h];
    this.faces = [[0,1,2,3],[1,5,6,2],[5,4,7,6],[4,0,3,7],[0,4,5,1],[3,2,6,7]];
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

  this.matrix2cube = function (matrix) {
    for (var i = 0; i < 6; i++) {
      this.vertices[i].array2vertex(matrix[i]);
    }
  }

  //Parameter: Face index.
  this.normal = function(i){

    console.log("Inicio normal");
    a = this.vertices[this.faces[i][0]];
    b = this.vertices[this.faces[i][1]];
    c = this.vertices[this.faces[i][2]];
    console.log(a);
    console.log(b);
    console.log(c);

    var bc = [c.x - b.x, c.y - b.y, c.z - b.z];
    var ba = [a.x - b.x, a.y - b.y, a.z - b.z];
    console.log(bc);
    console.log(ba);
    console.log("fim do bc,ba");
    var normal = [
      (bc[1] * ba[2]) - (ba[2] * ba[1]),
      (bc[2] * ba[0]) - (bc[0] * ba[2]),
      (bc[0] * ba[1]) - (bc[1] * ba[0])
    ];
    console.log(normal);
    var m_normal = Math.sqrt(
      Math.pow(normal[0], 2) + Math.pow(normal[1], 2) + Math.pow(normal[2], 2)
    );
    console.log(m_normal);
    var n_normal = [normal[0]/m_normal, normal[1]/m_normal, normal[2]/m_normal];
    console.log(n_normal);
    console.log("fim do log da normal");
    return n_normal;
  }

}