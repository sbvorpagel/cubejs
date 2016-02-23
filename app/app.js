mf = new MATH(); // mathematical functions

VRP = [400, 300, 1000, 1];
P = [30, 20, 50, 1];
view_up = [0, 1, 0]


//Global canvas var
var xy;
var zx;
var zy;
var view;
var canvas = [];

//Global Project Vars
var CUBES = new Objects();
var SELECTED = [];
var BUTTON_CUBE = false;
var BUTTON_SELECT = false;
var BUTTON_CUBES = false;
var BUTTON_MOVE = false;
var BUTTON_ROTATION = false;
var BUTTON_SCALE = false;
var BUTTON_VISIBLE = false;
var BUTTON_VISUALIZATION = false;
var BUTTON_FLAT = false;


var CENTER_X = 315;
var CENTER_Y = 163;
var CENTER_Z = 163;
var JUMP     = 30;

function set_all_false() {
  BUTTON_CUBE = false;
  BUTTON_MOVE = false;
  BUTTON_ROTATION = false;
  BUTTON_SCALE = false;
}

function button_save(name, type) {
  var a = document.createElement("a");
  var file = new Blob([CUBES.to_file()], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
  a.click();
 }

 function button_open(json) {
   set_all_false();
   CUBES = new Objects();
   CUBES.fromJSON(json);
   drawObjects();
 }

function button_cube() {
  set_all_false();
  BUTTON_CUBE = true;
  menu_state();
}

function button_select() {
  set_all_false();
  if (BUTTON_SELECT == true) BUTTON_SELECT= false;
  else BUTTON_SELECT = true;
  SELECTED = [];
  menu_state();
  drawObjects();
}

function button_cubes() {
  if (BUTTON_CUBES == true)
      BUTTON_CUBES = false;
  else
      BUTTON_CUBES = true;
  if (SELECTED.length > 1) {
    /* Creates a new list where the selected cubes will be grouped */
    var group = new Objects();
    for (var i = 0; i < SELECTED.length; i++) {
      /* Gets the first list of cube(s) from the CUBES array with SELECTED[i] index */
      var a = CUBES.getObjects()[SELECTED[i]];

     /* Add the first item on the CUBES list to the group */
      group.addObjects(a);
    }

    /* Remove the objects grouped from the CUBES list */
    for(var i = 0; i < SELECTED.length; i++){
      CUBES.getObjects().splice(SELECTED[i],1);
    }

    /* Adds the group as one object to the CUBES list */
    CUBES.addObjects(group);
  }
  SELECTED = [];
  drawObjects();
}

function button_move() {
  set_all_false();
  BUTTON_MOVE = true;
  menu_state();
}

function button_rotation() {
  set_all_false();
  BUTTON_ROTATION = true;
  menu_state();
}

function button_scale() {
  set_all_false();
  BUTTON_SCALE = true;
  menu_state();
}

function button_visible() {
  if (BUTTON_VISIBLE == true) BUTTON_VISIBLE = false;
  else BUTTON_VISIBLE = true;
  drawObjects();
}

function button_delete() {
  CUBES = new Objects();
  drawObjects();
}

function button_visualization() {
  if (BUTTON_VISUALIZATION == true) BUTTON_VISUALIZATION = false;
  else BUTTON_VISUALIZATION = true;
  drawObjects();
}

function button_flat() {
  if (BUTTON_FLAT == true) BUTTON_FLAT = false;
  else BUTTON_FLAT = true;
  drawObjects();
}

window.onload = main;

function main () {
  startViews();
}
