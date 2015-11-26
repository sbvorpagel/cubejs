/*
  Function responsible for drawing the objects
  on all the four canvas.

  Parameters: cubes  - a list of all the current cubes
              canvas - a list of all the created canvas
*/

function drawObjects(cubes, canvas) {

  this.cubes  = cubes;
  this.canvas = canvas;

  /*
    Used to access this.cubes ince we can't access this.cubes
    directly from the drawing functions.
  */
  getList = function(){
    return this.cubes.getObjects();
  }

  // Draws the objects on the xy canvas
  drawXY = function() {
    var cubes = getList();
    for (var x = 0; x < cubes.length; x++) {
      var cube = cubes[x];
      console.log(cube.getCenter());
      for (var i = 0; i < 6; i++) {
        var f = cube.faces[i];
        ctxy.strokeStyle="#FF0000";
        ctxy.beginPath();
        ctxy.moveTo(cube.vertices[[f[0]]].x, cube.vertices[[f[0]]].y);
        ctxy.lineTo(cube.vertices[[f[1]]].x, cube.vertices[[f[1]]].y);
        ctxy.lineTo(cube.vertices[[f[2]]].x, cube.vertices[[f[2]]].y);
        ctxy.lineTo(cube.vertices[[f[3]]].x, cube.vertices[[f[3]]].y);
        ctxy.closePath();
        ctxy.stroke();
      }
    }
  }

  // Draws the objects on the xz canvas
  drawXZ = function () {
    var cubes = getList();
    for (var x = 0; x < cubes.length; x++) {
      var cube = cubes[x];
      for (var i = 0; i < 6; i++) {
        var f = cube.faces[i];
        ctxz.strokeStyle="#FF0000";
        ctxz.beginPath();
        ctxz.moveTo(cube.vertices[[f[0]]].x, cube.vertices[[f[0]]].z);
        ctxz.lineTo(cube.vertices[[f[1]]].x, cube.vertices[[f[1]]].z);
        ctxz.lineTo(cube.vertices[[f[2]]].x, cube.vertices[[f[2]]].z);
        ctxz.lineTo(cube.vertices[[f[3]]].x, cube.vertices[[f[3]]].z);
        ctxz.closePath();
        ctxz.stroke();
      }
    }
  }
  // Draws the objects on the zy canvas
  drawZY = function () {
    var cubes = getList();
    for (var x = 0; x < cubes.length; x++) {
      var cube = cubes[x];
      console.log(cube.getCenter());
      for (var i = 0; i < 6; i++) {
        var f = cube.faces[i];
        ctxz.strokeStyle="#FF0000";
        ctzy.beginPath();
        ctzy.moveTo(cube.vertices[[f[0]]].z , cube.vertices[[f[0]]].y);
        ctzy.lineTo(cube.vertices[[f[1]]].z, cube.vertices[[f[1]]].y);
        ctzy.lineTo(cube.vertices[[f[2]]].z, cube.vertices[[f[2]]].y);
        ctzy.lineTo(cube.vertices[[f[3]]].z, cube.vertices[[f[3]]].y);
        ctzy.closePath();
        ctzy.stroke();
      }
    }
  }

  // Clears all the canvas and draws the modified objects
  ctxy.clearRect(0,0,this.canvas[0].width,this.canvas[0].height) // Canvas xy
  ctxz.clearRect(0,0,this.canvas[1].width,this.canvas[1].height) // Canvas xz
  ctzy.clearRect(0,0,this.canvas[2].width,this.canvas[2].height) // Canvas zy
  drawXY();
  drawXZ();
  drawZY();
}
