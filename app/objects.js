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
}
