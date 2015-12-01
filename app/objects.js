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
        cube.createCubeJSON(obj[i].objects[j].center,
                            obj[i].objects[j].vertices,
                            obj[i].objects[j].faces);
        objs.addObjects(cube);
      }
      this.objects.push(objs);
    }
    return this.objects;
  }
}
