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


  console.log("Inicio do log referente a Vertex");
  var pa = new Vertex(1, 2, 0);
  var pb = new Vertex(2, 0, 1);
  var pc = new Vertex(0, 2, 3);
  console.log("Fim do logo referente a Vertex");

  console.log("Inicio do log referente a Face");
  var f = new Face(pc, pa, pb);
  var f_normal = f.normal();
  console.log(f_normal);
  var vis = n[0]*f_normal[0] + [1]*f_normal[1] + [2]*f_normal[2];
  console.log(vis);
  console.log("Fim do log referente a Face");
}
