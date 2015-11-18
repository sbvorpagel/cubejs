window.onload = main;

function main () {
  var VRP = [15, 20, 50, 1];
  var P = [0, 0, 0, 1];
  var N = [VRP[0]-P[0], VRP[1]-P[1], VRP[2]-P[2]];
  var nN = Math.sqrt((Math.pow(N[0], 2) + Math.pow(N[1], 2) + Math.pow(N[2], 2)));
  var n = [N[0]/nN, N[1]/nN, N[2]/nN];
  //window.onload = startViews;

  //simulate mouse click
  var x = 200;
  var y = 200;
  var z = 200;

  var cube = new Cube();
  cube.createCube(x, y, z);
  var aux = cube.normal(0);
  var visible = (
    n[0]*aux[0] + n[1]*aux[1]+n[2]*aux[2]
  );

  startViews([cube]);



}
