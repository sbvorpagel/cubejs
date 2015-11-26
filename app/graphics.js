/*
  Defines the geometric transformations
  that can be applied to the objects created
  by the user.
*/

var PI = Math.acos(-1);
var CENTER_X = 290;
var CENTER_Y = 183;
var CENTER_Z = 183;

function multiply(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(bNumRows);
  for (var r = 0; r < bNumRows; r++) {
    m[r] = new Array(aNumRows);
  }
  for (var i = 0; i < aNumRows; i++) {
    for (var j = 0; j < bNumRows; j++) {
      var tmp = 0;
      for (var k = 0; k < aNumCols; k++) {
        tmp = tmp + a[i][k]*b[j][k];
      }
      m[j][i] = tmp;
    }
  }
  return m;
}

function translation (x, y, z, cubes) {
  for (var c = 0; c < cubes.length; c++) {
    var cube = cubes[c].cube2matrix();
    for (var i = 0; i < cube.length; i++) {
      cube[i][0] = cube[i][0] + x;
      cube[i][1] = cube[i][1] + y;
      cube[i][2] = cube[i][2] + z;
    }
    cubes[c].matrix2cube(cube);
  }
  return cubes;
}

function rotation_z (angule, cubes) {
  var cos = Math.cos(angule*PI/180);
  var sin = Math.sin(angule*PI/180);
  matriz_rz = [
    [cos, -sin, 0, 0],
    [sin, cos, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
  ];
  cubes = translation(-CENTER_X, -CENTER_Y, -CENTER_Z, cubes);
  for (var c = 0; c < cubes.length; c++) {
    var cube = cubes[c].cube2matrix();
    cube = multiply(matriz_rz, cube);
    cubes[c].matrix2cube(cube);
  }
  cubes = translation(CENTER_X, CENTER_Y, CENTER_Z, cubes);
  return cubes;
}

function rotation_y (angule, cubes) {
  var cos = Math.cos(angule*PI/180);
  var sin = Math.sin(angule*PI/180);
  matriz_ry = [
    [cos, 0, sin, 0],
    [0, 1, 0, 0],
    [-sin, 0, cos, 0],
    [0, 0, 0, 1]
  ];
  cubes = translation(-CENTER_X, -CENTER_Y, -CENTER_Z, cubes);
  for (var c = 0; c < cubes.length; c++) {
    var cube = cubes[c].cube2matrix();
    cube = multiply(matriz_ry, cube);
    cubes[c].matrix2cube(cube);
  }
  cubes = translation(CENTER_X, CENTER_Y, CENTER_Z, cubes);
  return cubes;
}

function rotation_x (angule, cubes) {
  var cos = Math.cos(angule*PI/180);
  var sin = Math.sin(angule*PI/180);
  matriz_rx = [
    [1, 0, 0, 0],
    [0, cos, -sin, 0],
    [0, sin, cos, 0],
    [0, 0, 0, 1]
  ];
  cubes = translation(-CENTER_X, -CENTER_Y, -CENTER_Z, cubes);
  for (var c = 0; c < cubes.length; c++) {
    var cube = cubes[c].cube2matrix();
    cube = multiply(matriz_rx, cube);
    cubes[c].matrix2cube(cube);
  }
  cubes = translation(CENTER_X, CENTER_Y, CENTER_Z, cubes);
  return cubes;
}

function scale_z (value, cubes) {
  cubes = translation(-CENTER_X, -CENTER_Y, -CENTER_Z, cubes);
  for (var c = 0; c < cubes.length; c++) {
    var cube = cubes[c].cube2matrix();
    for (var i = 0; i < cube.length; i++) {
      cube[i][2] = cube[i][2] * value;
    }
    cubes[c].matrix2cube(cube);
  }
  cubes = translation(CENTER_X, CENTER_Y, CENTER_Z, cubes);
  return cubes;
}