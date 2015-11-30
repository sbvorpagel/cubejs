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
  if (BUTTON_SELECT == true) BUTTON_SELECT= false;
  else BUTTON_SELECT = true;
  SELECTED = [];
  menu_state();
  drawObjects();
}

function button_cubes() {
  if (BUTTON_CUBES == true) BUTTON_CUBES = false;
  else BUTTON_CUBES = true;
  if (SELECTED.length > 1) {
    var cont = 0;
    for (var i = 1; i < SELECTED.length; i++) {
      cont++;
      var a = CUBES.getObjects()[i].getObjects();
      CUBES.getObjects()[SELECTED[0]].getObjects().push(a[0]);
    }
    CUBES.getObjects().splice(1, cont);
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



window.onload = main;

function main () {
  startViews();
}
