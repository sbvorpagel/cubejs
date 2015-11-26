/* Defines the Cube object

   This class defines the attributes, and functions
   that operate over those attributes, of a Cube
   in space (R³).

   Every cube has the following attributes:
   - 1 color
   - 6 faces (stored in a list)
   - 8 vertices (stored in a list)
   - 1 center
*/

var JUMP = 50;

function Cube() {
  this.c;
  this.faces;
  this.vertices;
  this.center;

  /*
    Creates a cube given the coordinates of its
    center. A jump value is defined beforehand
    and is used to calculate the coordinates of
    each vertex.

    To calculate the coordinates of each vertex
    the constructor adds or subtracts a JUMP value
    to the center coordinates This JUMP value is
    equal to the (cube length)/2. The JUMP value
    is not defined by the user so each cube is
    created with the same size.

    Parameter: Center (x,y,z) of the cube.
  */
  this.createCube = function (x, y, z) {
    this.center = [x, y, z];
    var a = new Vertex(x-JUMP, y+JUMP, z-JUMP);
    var b = new Vertex(x+JUMP, y+JUMP, z-JUMP);
    var c = new Vertex(x+JUMP, y-JUMP, z-JUMP);
    var d = new Vertex(x-JUMP, y-JUMP, z-JUMP);
    var e = new Vertex(x-JUMP, y+JUMP, z+JUMP);
    var f = new Vertex(x+JUMP, y+JUMP, z+JUMP);
    var g = new Vertex(x+JUMP, y-JUMP, z+JUMP);
    var h = new Vertex(x-JUMP, y-JUMP, z+JUMP);
    this.vertices = [a, b, c, d, e, f, g, h];
    this.faces = [[0,1,2,3],[1,5,6,2],[5,4,7,6],[4,0,3,7],[0,4,5,1],[3,2,6,7]];
  }

  // Updates the color attribute
  this.updateColor = function(c) {
    this.c = c
  }

  //Transform a list of vertices into a matrix
  this.cube2matrix = function () {
    var matrix = [];
    for (var i = 0; i < 8; i++) {
      aux = this.vertices[i].vertex2array();
      matrix.push(aux);
    }
    return matrix;
  }

  /*
    Transform a matrix of vertices back to a list.
    Parameter: Matrix of vertices
  */
  this.matrix2cube = function (matrix) {
    for (var i = 0; i < 8; i++) {
      this.vertices[i].array2vertex(matrix[i]);
    }
  }

  /*
    Calculates the normal vector of a given face.
    This is used later to defineif a face is visible
    or not.
    Parameter: Face index.
  */
  this.normal = function(i){
    a = this.vertices[this.faces[i][0]];
    b = this.vertices[this.faces[i][1]];
    c = this.vertices[this.faces[i][2]];
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
