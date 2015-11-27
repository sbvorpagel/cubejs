/*
  Defines the canvas used as
  view planes.
*/

var BUTTON_CUBE = false;
var BUTTON_SELECT = false;
var BUTTON_CUBES = false;
var BUTTON_MOVE = false;
var BUTTON_ROTATION = false;
var BUTTON_SCALE = false;
var BUTTON_VISIBLE = false;
var BUTTON_DELETE = false;


function button_save() {
  console.log("Click no salvar");
}

function button_open() {

}

function button_cube() {
  if (BUTTON_CUBE == false)
    BUTTON_CUBE = true;
  else
    BUTTON_CUBE = false;
    console.log("Select", BUTTON_CUBE);
}

function button_select() {
  if (BUTTON_SELECT == false)
    BUTTON_SELECT = true;
  else
    BUTTON_SELECT = false;
    console.log("Select", BUTTON_SELECT);
}

function button_cubes() {
  if (BUTTON_CUBES == false)
    BUTTON_CUBES = true;
  else
    BUTTON_CUBES = false;
    console.log("CUBES", BUTTON_CUBES);
}

function button_move() {
  if (BUTTON_MOVE == false)
    BUTTON_MOVE = true;
  else
    BUTTON_MOVE = false;
    console.log("MOVE", BUTTON_MOVE);
}

function button_rotation() {
  if (BUTTON_ROTATION == false)
    BUTTON_ROTATION = true;
  else
    BUTTON_ROTATION = false;
    console.log("ROTATION", BUTTON_ROTATION);
}

function button_scale() {
  if (BUTTON_SCALE == false)
    BUTTON_SCALE = true;
  else
    BUTTON_SCALE = false;
    console.log("SCALE", BUTTON_SCALE);
}

function button_visible() {
  if (BUTTON_VISIBLE == false)
    BUTTON_VISIBLE = true;
  else
    BUTTON_VISIBLE = false;
    console.log("VISIBLE", BUTTON_VISIBLE);
}

function button_delete() {
  if (BUTTON_DELETE == false)
    BUTTON_DELETE = true;
  else
    BUTTON_DELETE = false;
    console.log("DELETE", BUTTON_DELETE);
}

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
