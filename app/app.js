mf = new MATH(); // mathematical functions

VRP = [200, 200, 1000, 1];
P = [0, 0, 0, 1];
view_up = [0, 1, 0];

ila = [500, 500, 500];
il = [500, 500, 500];
ka = [0.3, 0.2, 0.2];
ks = [0.2, 0.2, 0.2];
kd = [0.2, 0.2, 0.2];
DP = 500;



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
var TOTAL = 0;

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

      /* Since CUBES has less 1 element, we must adapt the indexes on SELECTED */
      for(var j = 0; j < SELECTED.length; j++)
          /*If the index is bigger than zero, decrement it */
          if(SELECTED[j] != 0) SELECTED[j]--;
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

function atualiza_configuracoes() {
  VRP[0] = document.getElementById("vrpx").value;
  VRP[1] = document.getElementById("vrpy").value;
  VRP[2] = document.getElementById("vrpz").value;

  P[0] = document.getElementById("px").value;
  P[1] = document.getElementById("py").value;
  P[2] = document.getElementById("pz").value;

  view_up[0] = document.getElementById("viewx").value;
  view_up[1] = document.getElementById("viewy").value;
  view_up[2] = document.getElementById("viewz").value;

  ila[0] = document.getElementById("ilax").value;
  ila[1] = document.getElementById("ilay").value;
  ila[2] = document.getElementById("ilaz").value;

  il[0] = document.getElementById("ilx").value;
  il[1] = document.getElementById("ily").value;
  il[2] = document.getElementById("ilz").value;

  ka[0] = document.getElementById("kax").value;
  ka[1] = document.getElementById("kay").value;
  ka[2] = document.getElementById("kaz").value;

  ks[0] = document.getElementById("ksx").value;
  ks[1] = document.getElementById("ksy").value;
  ks[2] = document.getElementById("ksz").value;

  kd[0] = document.getElementById("kdx").value;
  kd[1] = document.getElementById("kdy").value;
  kd[2] = document.getElementById("kdz").value;

  DP = document.getElementById("dpinput").value;
  drawObjects();
}

window.onload = main;

function main () {

  document.getElementById("vrpx").value = VRP[0];
  document.getElementById("vrpy").value = VRP[1];
  document.getElementById("vrpz").value = VRP[2];

  document.getElementById("px").value = P[0];
  document.getElementById("py").value = P[1];
  document.getElementById("pz").value = P[2];

  document.getElementById("viewx").value = view_up[0];
  document.getElementById("viewy").value = view_up[1];
  document.getElementById("viewz").value = view_up[2];

  document.getElementById("ilax").value = ila[0];
  document.getElementById("ilay").value = ila[1];
  document.getElementById("ilaz").value = ila[2];

  document.getElementById("ilx").value = il[0];
  document.getElementById("ily").value = il[1];
  document.getElementById("ilz").value = il[2];

  document.getElementById("kax").value = ka[0];
  document.getElementById("kay").value = ka[1];
  document.getElementById("kaz").value = ka[2];

  document.getElementById("ksx").value = ks[0];
  document.getElementById("ksy").value = ks[1];
  document.getElementById("ksz").value = ks[2];

  document.getElementById("kdx").value = kd[0];
  document.getElementById("kdy").value = kd[1];
  document.getElementById("kdz").value = kd[2];

  document.getElementById("dpinput").value = DP;

  startViews();
}
