
function translation (x, y, z, cube) {
  console.log("entrei aqui");
  console.log(cube);
  for (var i = 0; i < cube.length; i++) {
    cube[i][0] = cube[i][0] + x;
    cube[i][1] = cube[i][1] + y;
    cube[i][2] = cube[i][2] + z;
  }
  return cube;
}
