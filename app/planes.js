/*
  Defines the canvas used as
  view planes.
*/
function startViews(cubes){
  this.cubes = cubes;

  var CENTER_X = 315;
  var CENTER_Y = 163;
  var CENTER_Z = 163;
  var JUMP     = 30;
  getCubes = function(){
    return this.cubes;
  }

  /*
   Calculate the distance between a pointe clicked by the user and the center of each
   each cube to find the closest one. THe closest one is the one selected by the user.
  */
  getDistance = function (cubes,click){
    var objects     = cubes; // List of cubes
    var point       = click; // Point clicked on screen
    var select      = false; // Distance calulated between point and center of a cube
    var smallest    = 999;   // Smallest distance found
    var listIndex   = 0;     // Index of the list where the cube is stored
    var objectIndex = 0;     // Index of the object
    var center;

    for(var i = 0; i < objects.length; i++){
      list = objects[i].getObjects();

      for(var j = 0; j < list.length; j++){
        center = list[j].getCenter();

        if((click[0] <= (center[0] + JUMP)) && (click[0] >= (center[0] - JUMP))){
          console.log("Passou X!");
          if((click[1] <= (center[1] + JUMP)) && (click[1] >= (center[1] - JUMP))){
            listIndex = i;
            objectIndex = j;
            select = true;
          }
        }
      }
    }
    if(select)
      return [listIndex,objectIndex];
    else
      false;
  }
  // Canvas that shows (x,y) coordinates (parallel projection)
  var xy = document.getElementById("view_xy");
    if (xy && xy.getContext) {
      ctxy = xy.getContext("2d");
  }

  // Canvas that shows (x,z) coordinates (parallel projection)
  var xz = document.getElementById("view_xz");
    if (xz && xz.getContext) {
      ctxz = xz.getContext("2d");
    // aqui vai o loop
  }

  // Canvas that shows (z,y) coordinates (parallel projection)
  var zy = document.getElementById("view_zy");
    if (zy && zy.getContext) {
      ctzy = zy.getContext("2d");
      //aqui vai o loop
  }

  // Canvas that shows a perspective projection
  var view = document.getElementById("view");
    if (view && view.getContext) {
      ctview = view.getContext("2d");
      //aqui vai o loop
  }

  // Creates a list of canvas used by the drawObjects functions
  var canvas = [];
  canvas.push(xy);
  canvas.push(xz);
  canvas.push(zy);

  //Adiciona a função click apenas no canvas, xy retorna 1
  xy.addEventListener('click', function(event) {
    var rect = xy.getBoundingClientRect();
    var click = [event.x - rect.left, event.y - rect.top];
    var indexes = [];
    cubes = getCubes();
    /*var cube = new Cube();
    var rect = xy.getBoundingClientRect();
    var list = new Objects();
    cube.createCube(event.x, event.y, CENTER_Z);
    list.addObjects(cube)
    cubes.addObjects(list);
    drawObjects(cubes,canvas);*/
    indexes = getDistance(cubes.getObjects(), click);
    drawObjects(cubes,canvas,indexes)
  });

  xz.addEventListener('click', function(event){
    /*if(event.which == 1){
      addEventListener('mousemove',moved)
      event.preventDefault();
    }*/

    cubes = getCubes();
    var cube = new Cube();
    var rect = xz.getBoundingClientRect();
    var list = new Objects();
    cube.createCube(event.x - rect.left, CENTER_Y ,event.y - rect.top);
    list.addObjects(cube)
    cubes.addObjects(list);
    drawObjects(cubes,canvas);
  });

  zy.addEventListener('click', function(event) {
    cubes = getCubes();
    var cube = new Cube();
    var rect = zy.getBoundingClientRect();
    var list = new Objects();
    cube.createCube(CENTER_X, event.y - rect.top, event.x);
    list.addObjects(cube);
    cubes.addObjects(list);
    drawObjects(cubes,canvas);
  });


  function buttonPressed(event){
    if(event.buttons == null)
      return event.which != 0;
    else
      return event.buttons != 0;
  }

  function moved(event){
    if(!buttonPressed(event))
      console.log("Parou!");
    else
    console.log("Desclique:",event.clientX, event.clientY);
  }
}
