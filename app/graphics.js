var PI = Math.acos(-1);

function multiply(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(bNumRows);  // initialize array of rows OK
  for (var r = 0; r < bNumRows; r++) {
    m[r] = new Array(aNumRows); // initialize the current row
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

function translation (x, y, z, cube) {
  console.log(cube);
  for (var i = 0; i < cube.length; i++) {
    cube[i][0] = cube[i][0] + x;
    cube[i][1] = cube[i][1] + y;
    cube[i][2] = cube[i][2] + z;
  }
  return cube;
}

function rotation_z (angule, cube) {
  var cos = Math.cos(angule*PI/180);
  var sin = Math.sin(angule*PI/180);
  matriz_rz = [
    [cos, -sin, 0, 0],
    [sin, cos, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
  ];
  cube = multiply(matriz_rz, cube);
  return cube;
}

function rotation_y (angule, cube) {
  var cos = Math.cos(angule*PI/180);
  var sin = Math.sin(angule*PI/180);
  matriz_ry = [
    [cos, 0, sin, 0],
    [0, 1, 0, 0],
    [-sin, 0, cos, 0],
    [0, 0, 0, 1]
  ];
  cube = multiply(matriz_ry, cube);
  return cube;
}

function rotation_x (angule, cube) {
  var cos = Math.cos(angule*PI/180);
  var sin = Math.sin(angule*PI/180);
  matriz_rx = [
    [1, 0, 0, 0],
    [0, cos, -sin, 0],
    [0, sin, cos, 0],
    [0, 0, 0, 1]
  ];
  cube = multiply(matriz_rx, cube);
  return cube;
}
