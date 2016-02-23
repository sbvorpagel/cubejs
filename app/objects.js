/* Defines the Object class

   This class stores in a list all the objects
   that were created by the user.

   The list is defined as a list of lists, i.e,
   every item is another list with one or more
   elements.

*/

function Objects() {
  this.objects = [];
  this.center;
  // Add a list of one or more elements to the list of Objects
  this.addObjects = function(list) {
    this.objects.push(list);
    if(this.objects.length == 1){
        this.center = list.center;
    }else{
        var minX=9999, minY=9999, minZ=9999, maxX=-1, maxY=-1, maxZ=-1;
        for (var i = 0; i < this.objects.length; i++) {
          if (this.objects[i].center[0] < minX) minX = this.objects[i].center[0];
          if (this.objects[i].center[0] > maxX) maxX = this.objects[i].center[0];
          if (this.objects[i].center[1] < minY) minY = this.objects[i].center[1];
          if (this.objects[i].center[1] > maxY) maxY = this.objects[i].center[1];
          if (this.objects[i].center[2] < minZ) minZ = this.objects[i].center[2];
          if (this.objects[i].center[2] > maxZ) maxZ = this.objects[i].center[2];
        }
       this.center = [(maxX-minX)/2, (maxY-minY)/2, (maxZ-minZ)/2];
      }    
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

  this.getCenter = function(){
      return this.center;
  }
}
