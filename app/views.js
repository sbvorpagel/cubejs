function startViews(cubes) {

  this.cubes = cubes;

  getObjects = function() {
    return this.cubes
  }

  var xy = document.getElementById("view_xy");
  if (xy && xy.getContext) {
    ctxy = xy.getContext("2d");
  }

  var xz = document.getElementById("view_xz");
  if (xz && xz.getContext) {
    ctxz = xz.getContext("2d");
    // aqui vai o loop
  }

  var zy = document.getElementById("view_zy");
  if (zy && zy.getContext) {
    ctzy = zy.getContext("2d");
    //aqui vai o loop
  }

  var view = document.getElementById("view");
  if (view && view.getContext) {
    ctview = view.getContext("2d");
    //aqui vai o loop
  }

  //definir as cores da view
  ctxy.fillStyle = "rgb(240,240,240)";
  ctxy.fillRect(0,0,580,367);
  ctxy.strokeStyle = "rgb(0, 0, 0)";


  drawXY = function() {
    var cubes = getObjects().getObjects();
    for (var x = 0; x < cubes.length; x++) {
      var cube = cubes[x];
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
    }
  }

  drawXZ = function () {
    var cubes = getObjects().getObjects();
    for (var x = 0; x < cubes.length; x++) {
      var cube = cubes[x];
      for (var i = 0; i < 6; i++) {
        var f = cube.faces[i];
        ctxz.beginPath();
        ctxz.moveTo(cube.vertices[[f[0]]].x, cube.vertices[[f[0]]].z);
        ctxz.lineTo(cube.vertices[[f[1]]].x, cube.vertices[[f[1]]].z);
        ctxz.lineTo(cube.vertices[[f[2]]].x, cube.vertices[[f[2]]].z);
        ctxz.lineTo(cube.vertices[[f[3]]].x, cube.vertices[[f[3]]].z);
        ctxz.closePath();
        ctxz.stroke();
      }
    }
  }

  drawZY = function () {
    var cubes = getObjects().getObjects();
    for (var x = 0; x < cubes.length; x++) {
      var cube = cubes[x];
      for (var i = 0; i < 6; i++) {
        var f = cube.faces[i];
        ctzy.beginPath();
        ctzy.moveTo(cube.vertices[[f[0]]].y, cube.vertices[[f[0]]].z);
        ctzy.lineTo(cube.vertices[[f[1]]].y, cube.vertices[[f[1]]].z);
        ctzy.lineTo(cube.vertices[[f[2]]].y, cube.vertices[[f[2]]].z);
        ctzy.lineTo(cube.vertices[[f[3]]].y, cube.vertices[[f[3]]].z);
        ctzy.closePath();
        ctzy.stroke();
      }
    }
  }

  drawView = function () {

  }

  function drawCube() {
    drawXY();
    drawXZ();
    drawZY();
    drawView();
  }

  //Adiciona a função click apenas no canvas, xy retorna 1
  xy.addEventListener('click', function(event) {
    cubes = getObjects();
    var cube = new Cube();
    cube.createCube(event.x, event.y, 0);
    cubes.addObjects(cube);
    console.log(cubes);
    drawCube();
  });

  xz.addEventListener('click', function(event) {
    cubes = getObjects();
    var cube = new Cube();
    var rect = xz.getBoundingClientRect();
    cube.createCube(event.x - rect.left, 0, event.y - rect.top);
    cubes.addCube(cube);
    console.log(cubes);
    drawCube();
  });

  zy.addEventListener('click', function(event) {
    cubes = getObjects();
    var cube = new Cube();
    var rect = xz.getBoundingClientRect();
    cube.createCube(0, event.x - rect.left, event.y - rect.top);
    cubes.addCube(cube);
    console.log(cubes);
    drawCube();
  });







































  //Adiciona a função click apenas no canvas, xz retorna 2


  //definir as cores da view
  ctxz.fillStyle = "rgb(240,240,240)";
  ctxz.fillRect(0,0,580,367);

  //definir as cores da view
  ctzy.fillStyle = "rgb(240,240,240)";
  ctzy.fillRect(0,0,580,367);


  //Adiciona a função click apenas no canvas, pers retorna 4
  view.addEventListener('click', function(event) {
    alert("sou uma View");

  });

  //definir as cores da view
  ctview.fillStyle = "rgb(240,240,240)";
  ctview.fillRect(0,0,580,367);



}
