window.onload = main;

function main () {
  var VRP = [15, 20, 50, 1];
  var P = [0, 0, 0, 1];
  var N = [VRP[0]-P[0], VRP[1]-P[1], VRP[2]-P[2]];
  var nN = Math.sqrt((Math.pow(N[0], 2) + Math.pow(N[1], 2) + Math.pow(N[2], 2)));
  var n = [N[0]/nN, N[1]/nN, N[2]/nN];
  //window.onload = startViews;

  var cubes = new Objects();

  startViews(cubes);




}
