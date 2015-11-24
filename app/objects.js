/* Defines the Object class

   This class stores all the objects that
   were created by the user in a list.

   The list is defined as a list of lists, i.e,
   every item is another list with one or more
   elements.

*/

function Objects() {
  this.objects = [];

  // Add a list of one or more elements to the list of Objects
  this.addCube = function(list) {
    this.objects.push(list);
  }

  // Gets the list an returns it
  this.getCubes = function() {
    return this.objects;
  }
}
