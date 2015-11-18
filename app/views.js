function startViews(cubes) {

  this.cubes = cubes;
  console.log(this.cubes);
  console.log(this.cubes[0]);

  getCube = function() {
    return this.cubes
  }

  var xy = document.getElementById("view_xy");
  if (xy && xy.getContext) {
    ctxy = xy.getContext("2d");
    //aqui vai o loop
  }

  //definir as cores da view
  ctxy.fillStyle = "rgb(240,240,240)";
  ctxy.fillRect(0,0,580,367);
  ctxy.strokeStyle = "rgb(0, 0, 0)";

  //Adiciona a função click apenas no canvas, xy retorna 1
  xy.addEventListener('click', function(event) {
    var x = event.x;
    var y = event.y;
    var z = 0;
    var cube = getCube()[0];
    for (var i = 0; i < 6; i++) {
      var f = cube.faces[i];
      ctxy.beginPath();

      ctxy.moveTo(cube.vertices[[f[0]]].x, cube.vertices[[f[0]]].y);
      ctxy.lineTo(cube.vertices[[f[1]]].x, cube.vertices[[f[1]]].y);
      ctxy.lineTo(cube.vertices[[f[2]]].x, cube.vertices[[f[2]]].y);
      ctxy.lineTo(cube.vertices[[f[3]]].x, cube.vertices[[f[3]]].y);
      ctxy.closePath();
      ctxy.stroke();
    }
  });







































  var xz = document.getElementById("view_xz");
  if (xz && xz.getContext) {
    ctxz = xz.getContext("2d");
    // aqui vai o loop
  }
  //Adiciona a função click apenas no canvas, xz retorna 2
  xz.addEventListener('click', function(event) {
    alert("sou um XZ");
  });

  //definir as cores da view
  ctxz.fillStyle = "rgb(240,240,240)";
  ctxz.fillRect(0,0,580,367);

  var zy = document.getElementById("view_zy");
  if (zy && zy.getContext) {
    ctzy = zy.getContext("2d");
    //aqui vai o loop
  }
  //Adiciona a função click apenas no canvas, yz retorna 3
  zy.addEventListener('click', function(event) {
    alert("sou um ZY");

  });

  //definir as cores da view
  ctzy.fillStyle = "rgb(240,240,240)";
  ctzy.fillRect(0,0,580,367);

  var view = document.getElementById("view");
  if (view && view.getContext) {
    ctview = view.getContext("2d");
    //aqui vai o loop
  }
  //Adiciona a função click apenas no canvas, pers retorna 4
  view.addEventListener('click', function(event) {
    alert("sou uma View");

  });

  //definir as cores da view
  ctview.fillStyle = "rgb(240,240,240)";
  ctview.fillRect(0,0,580,367);



}
