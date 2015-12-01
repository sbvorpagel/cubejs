/* Defines the Object class

   This class stores in a list all the objects
   that were created by the user.

   The list is defined as a list of lists, i.e,
   every item is another list with one or more
   elements.

*/

function Objects() {
  this.objects = [];

  // Add a list of one or more elements to the list of Objects
  this.addObjects = function(list) {
    this.objects.push(list);
  }

  // Gets the list an returns it
  this.getObjects= function() {
    return this.objects;
  }

  this.to_file = function() {
    return JSON.stringify(this.objects);
  }

  this.fromJSON = function(json) {
    this.objects = [];
    var obj = JSON.parse(json);
    for (var i = 0; i < obj.length; i++) {
      var objs = new Objects();
      for (var j = 0; j < obj[i].objects.length; j++) {
        var cube = new Cube();
        var center = obj[i].objects[j].center;
        var vertices = [];
        var faces = [];
        for (var k = 0; k < obj[i].objects[j].vertices.length; k++) {
          var vertex = new Vertex(
            obj[i].objects[j].vertices[k].x,
            obj[i].objects[j].vertices[k].y,
            obj[i].objects[j].vertices[k].z
          );
          vertices.push(vertex);
        }
        for (var k = 0; k < obj[i].objects[j].faces.length; k++) {
          faces.push(obj[i].objects[j].faces[k]);
        }
        cube.createCubeJSON(center, vertices, faces);
        objs.addObjects(cube);
      }
      this.objects.push(objs);
    }
    return this.objects;
  }
}
