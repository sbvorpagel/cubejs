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
    var str = "";
    str += this.objects.length + "\n";
    for (var i = 0; i < this.objects.length; i++) {
      str += this.objects[i].length + "\n";
      for (var j = 0; j < this.objects.length; j++) {
      /*  str += "\n"
        str += this.objects[i][j].cube2matrix() + "\n" +
               this.objects[i][j].vertex + "\n";
        str += "\n"*/
        console.log(this.objects[i][j]);
      }
    }
  }
}
