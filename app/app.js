//Global canvas var
var xy;
var zx;
var zy;
var view;
var canvas = [];

//Global Project Vars
var CUBES = new Objects();
var BUTTON_CUBE = false;
var BUTTON_SELECT = false;
var BUTTON_CUBES = false;
var BUTTON_MOVE = false;
var BUTTON_ROTATION = false;
var BUTTON_SCALE = false;
var BUTTON_VISIBLE = false;
var BUTTON_DELETE = false;

var CENTER_X = 315;
var CENTER_Y = 163;
var CENTER_Z = 163;
var JUMP     = 30;

function set_all_false() {
  BUTTON_CUBE = false;
  BUTTON_SELECT = false;
  BUTTON_CUBES = false;
  BUTTON_MOVE = false;
  BUTTON_ROTATION = false;
  BUTTON_SCALE = false;
  BUTTON_VISIBLE = false;
  BUTTON_DELETE = false;
}

function button_save(name, type) {
  console.log(CUBES);
  var a = document.createElement("a");
  var file = new Blob([CUBES.to_file()], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
  a.click();
 }

function button_open() {

}

function button_cube() {
  set_all_false();
  BUTTON_CUBE = true;
  menu_state();
}

function button_select() {
  set_all_false();
  BUTTON_SELECT = true;
  menu_state();
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



window.onload = main;

function main () {
  startViews();
}
