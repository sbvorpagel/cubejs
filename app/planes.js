/*
  Defines the canvas used as
  view planes.
*/

var index = [];

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
getDistance = function (cubes, click, a, b){
  var objects     = cubes; // List of cubes
  var point       = click; // Point clicked on screen
  var select      = false; // Distance calulated between point and center of a cube
  var listIndex   = -1;     // Index of the list where the cube is stored
  var center;

  for(var i = 0; i < objects.length; i++){
    center = objects[i].getCenter();
    if((click[0] <= (center[a] + JUMP)) && (click[0] >= (center[a] - JUMP))){
      if((click[1] <= (center[b] + JUMP)) && (click[1] >= (center[b] - JUMP))){
        listIndex = i;
      }
    }
  }
  return listIndex;
}
function create_cube_xy(event) {
  var cube = new Cube();
  var rect = xy.getBoundingClientRect();
  var list = new Objects();
  cube.createCube(event.x - rect.left, event.y - rect.top, CENTER_Z);
  list.addObjects(cube)
  CUBES.addObjects(list);
  TOTAL++;
  drawObjects();
}

function create_cube_xz(event) {
  var cube = new Cube();
  var rect = xz.getBoundingClientRect();
  var list = new Objects();
  cube.createCube(event.x - rect.left, CENTER_Y ,event.y - rect.top);
  list.addObjects(cube)
  CUBES.addObjects(list);
  TOTAL++;
  drawObjects();
}

function create_cube_zy(event) {
  var cube = new Cube();
  var rect = zy.getBoundingClientRect();
  var list = new Objects();
  cube.createCube(CENTER_X, event.y - rect.top, event.x - rect.left);
  list.addObjects(cube);
  CUBES.addObjects(list);
  TOTAL++;
  drawObjects();
}

function select_cube_xy(event) {
  var rect = xy.getBoundingClientRect();
  var click = [event.x - rect.left, event.y - rect.top];
  var index = getDistance(CUBES.getObjects(), click, 0, 1)
  
  // If some cube was selected
  if(index != -1 ){
    if(SELECTED.indexOf(index) == -1)
      SELECTED.push(index);
  }
  drawObjects();
}

function select_cube_xz(event) {
  var rect = xz.getBoundingClientRect();
  var click = [event.x - rect.left, event.y - rect.top];
  var index = getDistance(CUBES.getObjects(), click, 0, 2)

  // If some cube was selected
  if(index != -1 ){
    if(SELECTED.indexOf(index) == -1)
      SELECTED.push(index)
  }
  drawObjects();
}

function select_cube_zy(event) {
  var rect = zy.getBoundingClientRect();
  var click = [event.x - rect.left, event.y - rect.top];
  var index = getDistance(CUBES.getObjects(), click, 2, 1)

  // If some cube was selected
  if(index != -1 ){
    if(SELECTED.indexOf(index) == -1)
      SELECTED.push(index)
  }
  drawObjects();
}

var iX, iY, iZ;

function xyMoveT(e){
  var rect = xy.getBoundingClientRect();
  var x, y, z;
  
  if (dragok) {
    x = e.x - rect.left;
    y = e.y - rect.top;
  }
  for (var i = 0; i < SELECTED.length; i++) {
    var list = CUBES.getObjects();
    
    var loop = true;
    var i_stack = new Array();  // indexes stack
    var obj_stack = new Array();// objects stack
    var current = list[SELECTED[i]].getObjects();
    var next = null;
    var index = 0;              // current index;
    while(loop){
      try{
        next = current[index].getObjects();
        obj_stack.push(current);
        i_stack.push(index);
        current = next;
      }
      catch(next){
        /* Here is a tricky part: if both stacks are empty (first level of the tree)
         * and the index is equal to the first level array length, the algorithm is done */
        translation(x-iX, y-iY, 0, current[0]);
        if((obj_stack.length != 0) && (i_stack.length !=0)){
          current = obj_stack.pop();
          index = i_stack.pop();
          index++;
        }else{
          if(index == (current.length - 1))
            loop = false;
        }
      }
    }
  }
  iX = x;
  iY = y;
  iZ = 0;
  drawObjects();
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

function xzMoveT(e){
  var rect = xz.getBoundingClientRect();
  var x, y, z;
  
  if (dragok) {
    x = e.x - rect.left;
    y = e.y - rect.top;
  }
  for (var i = 0; i < SELECTED.length; i++) {
    var list = CUBES.getObjects();
    
    var loop = true;
    var i_stack = new Array();  // indexes stack
    var obj_stack = new Array();// objects stack
    var current = list[SELECTED[i]].getObjects();
    var next = null;
    var index = 0;              // current index;
    while(loop){
      try{
        next = current[index].getObjects();
        obj_stack.push(current);
        i_stack.push(index);
        current = next;
      }
      catch(next){
        /* Here is a tricky part: if both stacks are empty (first level of the tree)
         * and the index is equal to the first level array length, the algorithm is done */
       translation(x-iX, 0, y-iY, current[0]);
       if((obj_stack.length != 0) && (i_stack.length !=0)){
          current = obj_stack.pop();
          index = i_stack.pop();
          index++;
        }else{
          if(index == (current.length - 1))
            loop = false;
        }
      }
    }
  }
  iX = x;
  iY = y;
  iZ = 0;
  drawObjects();
}

function xzDownT(e){
  var rect = xz.getBoundingClientRect();
  iX = e.x - rect.left;
  iY = e.y - rect.top;
  iZ = CENTER_Z;
  dragok = true;
  xz.addEventListener('mousemove', xzMoveT, false);
}

function xzUpT(){
 dragok = false;
 xz.removeEventListener('mousemove', xzMoveT, false);
}
function xzMoveT(e){
  var rect = zy.getBoundingClientRect();
  var x, y, z;
  
  if (dragok) {
    x = e.x - rect.left;
    y = e.y - rect.top;
  }
  for (var i = 0; i < SELECTED.length; i++) {
    var list = CUBES.getObjects();
    
    var loop = true;
    var i_stack = new Array();  // indexes stack
    var obj_stack = new Array();// objects stack
    var current = list[SELECTED[i]].getObjects();
    var next = null;
    var index = 0;              // current index;
    while(loop){
      try{
        next = current[index].getObjects();
        obj_stack.push(current);
        i_stack.push(index);
        current = next;
      }
      catch(next){
        /* Here is a tricky part: if both stacks are empty (first level of the tree)
         * and the index is equal to the first level array length, the algorithm is done */
       translation(0,y-iY, x-iX, current[0]);
       if((obj_stack.length != 0) && (i_stack.length !=0)){
          current = obj_stack.pop();
          index = i_stack.pop();
          index++;
        }else{
          if(index == (current.length - 1))
            loop = false;
        }
      }
    }
  }
  iX = x;
  iY = y;
  iZ = 0;
  drawObjects();
}

function zyDownT(e){
  var rect = zy.getBoundingClientRect();
  iX = e.x - rect.left;
  iY = e.y - rect.top;
  iZ = CENTER_Z;
  dragok = true;
  zy.addEventListener('mousemove', zyMoveT, false);a
}

function zyUpT(){
 dragok = false;
 zy.removeEventListener('mousemove', zyMoveT, false);
}

function xyMoveR(e){
  var rect = xy.getBoundingClientRect();
  var x, y, z;
  if (dragok) {
    x = e.x - rect.left;
    y = e.y - rect.top;
    z = CENTER_Z;
  }
  for (var i = 0; i < SELECTED.length; i++) {
    if(iX < x) rotation_y(1, CUBES.getObjects()[SELECTED[i]].getObjects());
    if(iX > x) rotation_y(-1, CUBES.getObjects()[SELECTED[i]].getObjects());
    if(iY > y) rotation_x(1, CUBES.getObjects()[SELECTED[i]].getObjects());
    if(iY < y) rotation_x(-1, CUBES.getObjects()[SELECTED[i]].getObjects());
  }
  iX = x;
  iY = y;
  drawObjects();
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

function xzMoveR(e){
  var rect = xz.getBoundingClientRect();
  var x, y, z;
  if (dragok) {
    x = e.x - rect.left;
    y = e.y - rect.top;
    z = CENTER_Z;
  }
  for (var i = 0; i < SELECTED.length; i++) {
    if(iX < x) rotation_y(1, CUBES.getObjects()[SELECTED[i]].getObjects());
    if(iX > x) rotation_y(-1, CUBES.getObjects()[SELECTED[i]].getObjects());
    if(iY > y) rotation_x(1, CUBES.getObjects()[SELECTED[i]].getObjects());
    if(iY < y) rotation_x(-1, CUBES.getObjects()[SELECTED[i]].getObjects());
  }
  iX = x;
  iY = y;
  drawObjects();
}

function xzDownR(e){
  var rect = xz.getBoundingClientRect();
  iX = e.x - rect.left;
  iY = e.y - rect.top;
  iZ = CENTER_Z;
  dragok = true;
  xz.addEventListener('mousemove', xzMoveR, false);
}

function xzUpR(){
 dragok = false;
 xz.removeEventListener('mousemove', xzMoveR, false);
}

function zyMoveR(e){
  var rect = zy.getBoundingClientRect();
  var x, y, z;
  if (dragok) {
    x = e.x - rect.left;
    y = e.y - rect.top;
    z = CENTER_Z;
  }
  for (var i = 0; i < SELECTED.length; i++) {
    if(iX < x) rotation_y(1, CUBES.getObjects()[SELECTED[i]].getObjects());
    if(iX > x) rotation_y(-1, CUBES.getObjects()[SELECTED[i]].getObjects());
    if(iY > y) rotation_x(1, CUBES.getObjects()[SELECTED[i]].getObjects());
    if(iY < y) rotation_x(-1, CUBES.getObjects()[SELECTED[i]].getObjects());
  }
  iX = x;
  iY = y;
  drawObjects();
}

function zyDownR(e){
  var rect = zy.getBoundingClientRect();
  iX = e.x - rect.left;
  iY = e.y - rect.top;
  iZ = CENTER_Z;
  dragok = true;
  zy.addEventListener('mousemove', zyMoveR, false);
}

function zyUpR(){
 dragok = false;
 zy.removeEventListener('mousemove', zyMoveR, false);
}

function xzMoveS(e){
  var rect = xz.getBoundingClientRect();
  var y;
  if (dragok) y = e.y - rect.top;
  var a;
  if (iY < y) a = 0.95;
  else a = 1.05;
  if (SELECTED.length == 1)
    if(iY != y) scale_z(a , CUBES.getObjects()[SELECTED[0]].getObjects());
  iY = y;
  drawObjects();
}

function xzDownS(e){
  var rect = xz.getBoundingClientRect();
  iY = e.y - rect.top;
  dragok = true;
  xz.addEventListener('mousemove', xzMoveS, false);
}

function xzUpS(){
 dragok = false;
 xz.removeEventListener('mousemove', xzMoveS, false);
}

function zyMoveS(e){
  var rect = zy.getBoundingClientRect();
  var x;
  if (dragok) x = e.x - rect.left;
  var a;
  if (iX < x) a = 1.05;
  else a = 0.95;
  if (SELECTED.length == 1)
    if(iX != x) scale_z(a , CUBES.getObjects()[SELECTED[0]].getObjects());
  iX = x;
  drawObjects();
}

function zyDownS(e){
  var rect = zy.getBoundingClientRect();
  iX = e.x - rect.left;
  dragok = true;
  zy.addEventListener('mousemove', zyMoveS, false);
}

function zyUpS(){
 dragok = false;
 zy.removeEventListener('mousemove', zyMoveS, false);
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
  xz.removeEventListener('mousedown', xzDownS, false);
  xz.removeEventListener('mouseup', xzUpS, false);
  zy.removeEventListener('mousedown', zyDownS, false);
  zy.removeEventListener('mouseup', zyUpS, false);
  //Remove translation cube
  xy.removeEventListener('mousedown', xyDownT, false);
  xy.removeEventListener('mouseup', xyUpT, false);
  xz.removeEventListener('mousedown', xzDownT, false);
  xz.removeEventListener('mouseup', xzUpT, false);
  zy.removeEventListener('mousedown', zyDownT, false);
  zy.removeEventListener('mouseup', zyUpT, false);
  //Remove Rotation cube
  xy.removeEventListener('mousedown', xyDownR, false);
  xy.removeEventListener('mouseup', xyUpR, false);
  xz.removeEventListener('mousedown', xzDownR, false);
  xz.removeEventListener('mouseup', xzUpR, false);
  zy.removeEventListener('mousedown', zyDownR, false);
  zy.removeEventListener('mouseup', zyUpR, false);


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
    xz.addEventListener('mousedown', xzDownT, false);
    xz.addEventListener('mouseup', xzUpT, false);
    zy.addEventListener('mousedown', zyDownT, false);
    zy.addEventListener('mouseup', zyUpT, false);
  }

  if (BUTTON_ROTATION) {
    xy.addEventListener('mousedown', xyDownR, false);
    xy.addEventListener('mouseup', xyUpR, false);
    xz.addEventListener('mousedown', xzDownR, false);
    xz.addEventListener('mouseup', xzUpR, false);
    zy.addEventListener('mousedown', zyDownR, false);
    zy.addEventListener('mouseup', zyUpR, false);
  }

  if (BUTTON_SCALE) {
    xz.addEventListener('mousedown', xzDownS, false);
    xz.addEventListener('mouseup', xzUpS, false);
    zy.addEventListener('mousedown', zyDownS, false);
    zy.addEventListener('mouseup', zyUpS, false);
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
