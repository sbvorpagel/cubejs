/*
  Function responsible for drawing the objects
  on all the four canvas.

  Parameters: cubes  - a list of all the current cubes
              canvas - a list of all the created canvas
*/

function drawObjects(cubes, canvas,selected) {

  this.cubes  = cubes;
  this.canvas = canvas;
  this.indexes = selected;

  /*
    Used to access this.cubes ince we can't access this.cubes
    directly from the drawing functions.
  */
  getList = function(){
    return this.cubes.getObjects()
  }

  isSelected = function(){
    if(Array.isArray(this.indexes))
      return this.indexes;
    else
      return false;
  }

  // Draws the objects on the xy canvas
  drawXY = function() {
    var list   = getList();
    var select = isSelected();

    for(var j = 0; j < list.length; j++){
      var cubes = list[j].getObjects();
      for (var x = 0; x < cubes.length; x++) {
        var cube = cubes[x];
        for (var i = 0; i < 6; i++) {
          var f = cube.faces[i];
          ctxy.strokeStyle="#000000";

          if(select){
            if((select[0] == j) && (select[1] == x)){
              ctxy.strokeStyle="#2E9AFE";
            }
          }

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
  }

  // Draws the objects on the xz canvas
  drawXZ = function () {
    var list   = getList();
    var select = isSelected();

    for(var j = 0; j < list.length; j++){
      var cubes = list[j].getObjects();
      for (var x = 0; x < cubes.length; x++) {
        var cube = cubes[x];
        for (var i = 0; i < 6; i++) {
          var f = cube.faces[i];
          ctxz.strokeStyle="#000000";

          if(select){
            if((select[0] == j) && (select[1] == x)){
              ctxy.strokeStyle="#2E9AFE";
            }
          }

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
  }
  // Draws the objects on the zy canvas
  drawZY = function () {
    var list   = getList();
    var select = isSelected();

    for(var j = 0; j < list.length; j++){
      var cubes = list[j].getObjects();
      for (var x = 0; x < cubes.length; x++) {
        var cube = cubes[x];
        for (var i = 0; i < 6; i++) {
          var f = cube.faces[i];
          ctxz.strokeStyle="#000000";

          if(select){
            if((select[0] == j) && (select[1] == x)){
              ctzy.strokeStyle="#2E9AFE";
            }
          }

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
  }

  // Clears all the canvas and draws the modified objects
  ctxy.clearRect(0,0,this.canvas[0].width,this.canvas[0].height) // Canvas xy
  ctxz.clearRect(0,0,this.canvas[1].width,this.canvas[1].height) // Canvas xz
  ctzy.clearRect(0,0,this.canvas[2].width,this.canvas[2].height) // Canvas zy
  drawXY();
  drawXZ();
  drawZY();
}
