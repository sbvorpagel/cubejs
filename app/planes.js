/*
  Defines the canvas used as
  view planes.
*/

var indexes = [];

function startViews(){
  xy = document.getElementById("view_xy");
  xz = document.getElementById("view_xz");
  zy = document.getElementById("view_zy");
  view = document.getElementById("view");
  // Canvas that shows (x,y) coordinates (parallel projection)
  if (xy && xy.getContext) {
    ctxy = xy.getContext("2d");
  }

  // Canvas that shows (x,z) coordinates (parallel projection)
  if (xz && xz.getContext) {
    ctxz = xz.getContext("2d");
  }

  // Canvas that shows (z,y) coordinates (parallel projection)
  if (zy && zy.getContext) {
    ctzy = zy.getContext("2d");
  }

  // Canvas that shows a perspective projection
  if (view && view.getContext) {
    ctview = view.getContext("2d");
  }

  // Creates a list of canvas used by the drawObjects functions
  canvas.push(xy);
  canvas.push(xz);
  canvas.push(zy);
}


/*
 Calculate the distance between a pointe clicked by the user and the center of each
 each cube to find the closest one. THe closest one is the one selected by the user.
*/
getDistance = function (cubes, click){
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
  if(select) {
    SELECTED.push(objects[objectIndex]);
    return [listIndex, objectIndex];
  } else {
    false;
  }
}

function create_cube_xy(event) {
  var cube = new Cube();
  var rect = xy.getBoundingClientRect();
  var list = new Objects();
  cube.createCube(event.x - rect.left, event.y - rect.top, CENTER_Z);
  list.addObjects(cube)
  CUBES.addObjects(list);
  drawObjects(CUBES,canvas);
}

function create_cube_xz(event) {
  var cube = new Cube();
  var rect = xz.getBoundingClientRect();
  var list = new Objects();
  cube.createCube(event.x - rect.left, CENTER_Y ,event.y - rect.top);
  list.addObjects(cube)
  CUBES.addObjects(list);
  drawObjects(CUBES,canvas);
}

function create_cube_zy(event) {
  var cube = new Cube();
  var rect = zy.getBoundingClientRect();
  var list = new Objects();
  cube.createCube(CENTER_X, event.x - rect.left, event.y - rect.top);
  list.addObjects(cube);
  CUBES.addObjects(list);
  drawObjects(CUBES,canvas);
}

function select_cube_xy(event) {
  var rect = xy.getBoundingClientRect();
  var click = [event.x - rect.left, event.y - rect.top];
  var indexes = [];
  indexes = getDistance(CUBES.getObjects(), click);
  drawObjects(CUBES,canvas,indexes)
}

function select_cube_xz(event) {
  var rect = xz.getBoundingClientRect();
  var click = [event.x - rect.left, event.y - rect.top];
  indexes = getDistance(CUBES.getObjects(), click);
  drawObjects(CUBES,canvas,indexes)
}

function select_cube_zy(event) {
  var rect = zy.getBoundingClientRect();
  var click = [event.x - rect.left, event.y - rect.top];
  var indexes = [];
  indexes = getDistance(CUBES.getObjects(), click);
  drawObjects(CUBES,canvas,indexes)
}

var iX, iY, iZ;

function xyMoveT(e){
  var rect = xy.getBoundingClientRect();
  var x, y, z;
  if (dragok) {
    x = e.x - rect.left;
    y = e.y - rect.top;
    z = CENTER_Z;
  }
  translation(x-iX, y-iY, iZ, SELECTED[0].getObjects());
  iX = x;
  iY = y;
  iZ = 0;
  drawObjects(CUBES,canvas,indexes)
}

function xyDownT(e){
  var rect = xy.getBoundingClientRect();
  iX = e.x - rect.left;
  iY = e.y - rect.top;
  iZ = CENTER_Z;
  dragok = true;
  xy.addEventListener('mousemove', xyMoveT, false);
}

function xyUpT(){
 dragok = false;
 xy.removeEventListener('mousemove', xyMoveT, false);
}

function xyMoveR(e){
  var rect = xy.getBoundingClientRect();
  var x, y, z;
  if (dragok) {
    x = e.x - rect.left;
    y = e.y - rect.top;
    z = CENTER_Z;
  }
  if(iX < x) rotation_y(0.5, SELECTED[0].getObjects());
  if(iX > x) rotation_y(-0.5, SELECTED[0].getObjects());
  if(iY > y) rotation_x(0.5, SELECTED[0].getObjects());
  if(iY < y) rotation_x(-0.5, SELECTED[0].getObjects());
  iX = x;
  iY = y;
  drawObjects(CUBES,canvas,indexes)
}

function xyDownR(e){
  var rect = xy.getBoundingClientRect();
  iX = e.x - rect.left;
  iY = e.y - rect.top;
  iZ = CENTER_Z;
  dragok = true;
  xy.addEventListener('mousemove', xyMoveR, false);
}

function xyUpR(){
 dragok = false;
 xy.removeEventListener('mousemove', xyMoveR, false);
}

function xyMoveS(e){
  var rect = xy.getBoundingClientRect();
  var x, y, z;
  if (dragok) {
    x = e.x - rect.left;
    y = e.y - rect.top;
    z = CENTER_Z;
  }
  console.log(y-iY);
  if(iY != y) scale_z(-(y-iY), SELECTED[0].getObjects());
  iY = y;
  drawObjects(CUBES,canvas,indexes)
}

function xyDownS(e){
  var rect = xy.getBoundingClientRect();
  iX = e.x - rect.left;
  iY = e.y - rect.top;
  iZ = CENTER_Z;
  dragok = true;
  xy.addEventListener('mousemove', xyMoveS, false);
}

function xyUpS(){
 dragok = false;
 xy.removeEventListener('mousemove', xyMoveS, false);
}


function menu_state () {
  //remove create cube
  xy.removeEventListener('click', create_cube_xy, false);
  xz.removeEventListener('click', create_cube_xz, false);
  zy.removeEventListener('click', create_cube_zy, false);
  //remove select cube
  xy.removeEventListener('click', select_cube_xy, false);
  xz.removeEventListener('click', select_cube_xz, false);
  zy.removeEventListener('click', select_cube_zy, false);
  //Remove scale cube
  xy.removeEventListener('mousedown', xyDownS, false);
  xy.removeEventListener('mouseup', xyUpS, false);
  //Remove translation cube
  xy.removeEventListener('mousedown', xyDownT, false);
  xy.removeEventListener('mouseup', xyUpT, false);
  //Remove Rotation cube
  xy.removeEventListener('mousedown', xyDownR, false);
  xy.removeEventListener('mouseup', xyUpR, false);

  if (BUTTON_CUBE) {
    xy.addEventListener('click', create_cube_xy, false);
    xz.addEventListener('click', create_cube_xz, false);
    zy.addEventListener('click', create_cube_zy, false);
  }

  if (BUTTON_SELECT) {
    xy.addEventListener('click', select_cube_xy, false);
    xz.addEventListener('click', select_cube_xz, false);
    zy.addEventListener('click', select_cube_zy, false);
  }

  if (BUTTON_MOVE) {
    xy.addEventListener('mousedown', xyDownT, false);
    xy.addEventListener('mouseup', xyUpT, false);
  }

  if (BUTTON_ROTATION) {
    xy.addEventListener('mousedown', xyDownR, false);
    xy.addEventListener('mouseup', xyUpR, false);
  }

  if (BUTTON_SCALE) {
    xy.addEventListener('mousedown', xyDownS, false);
    xy.addEventListener('mouseup', xyUpS, false);
  }

}

function buttonPressed(event){
  if(event.buttons == null)
    return event.which != 0;
  else
    return event.buttons != 0;
}

function moved(event){
}
