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
  var x = 10;
  var y = 10;
  var z = 10;

  var cube = new Cube();
  cube.createCube(x, y, z);
  var aux = cube.normal(0);
  console.log(n);
  console.log(aux);
  var visible = (
    n[0]*aux[0] + n[1]*aux[1]+n[2]*aux[2]
  );  
  console.log(visible);





}
