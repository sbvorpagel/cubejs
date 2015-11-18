window.onload = main;

function main () {
  console.log("Inicio do log referente ao observador:");
  var VRP = [15, 20, 50, 1];
  console.log(VRP);
  var P = [0, 0, 0, 1];
  console.log(P);
  var N = [VRP[0]-P[0], VRP[1]-P[1], VRP[2]-P[2]];
  console.log(N);
  var nN = Math.sqrt((Math.pow(N[0], 2) + Math.pow(N[1], 2) + Math.pow(N[2], 2)));
  console.log(nN);
  var n = [N[0]/nN, N[1]/nN, N[2]/nN];
  console.log(n);
  console.log("Fim do log referente ao observador")
  //window.onload = startViews;

  //simulate mouse click
  var x = 0;
  var y = 0;
  var z = 0;

  var cube = new Cube();
  cube.createCube(x, y, z);
  aux = cube.cube2matrix();
  console.log(aux[0]);


}
