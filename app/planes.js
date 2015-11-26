/*
  Defines the canvas used as
  view planes.
*/
function startViews(cubes){
  this.cubes = cubes;

  getCubes = function(){
    return this.cubes;
  }
  // Canvas that shows (x,y) coordinates (parallel projection)
  var xy = document.getElementById("view_xy");
    if (xy && xy.getContext) {
      ctxy = xy.getContext("2d");
  }

  // Canvas that shows (x,z) coordinates (parallel projection)
  var xz = document.getElementById("view_xz");
    if (xz && xz.getContext) {
      ctxz = xz.getContext("2d");
    // aqui vai o loop
  }

  // Canvas that shows (z,y) coordinates (parallel projection)
  var zy = document.getElementById("view_zy");
    if (zy && zy.getContext) {
      ctzy = zy.getContext("2d");
      //aqui vai o loop
  }

  // Canvas that shows a perspective projection
  var view = document.getElementById("view");
    if (view && view.getContext) {
      ctview = view.getContext("2d");
      //aqui vai o loop
  }

  // Creates a list of canvas used by the drawObjects functions
  var canvas = [];
  canvas.push(xy);
  canvas.push(xz);
  canvas.push(zy);

  //Adiciona a função click apenas no canvas, xy retorna 1
  xy.addEventListener('click', function(event) {
    cubes = getCubes();
    var cube = new Cube();
    var rect = xy.getBoundingClientRect();
    cube.createCube(event.x, event.y, 0);
    cubes.addObjects(cube);
    drawObjects(cubes,canvas);
  });

  xz.addEventListener('mousedown', function(event){
    if(event.which == 1){
      addEventListener('mousemove',moved)
      event.preventDefault();
    }

    cubes = getCubes();
    var cube = new Cube();
    var rect = xz.getBoundingClientRect();
    cube.createCube(event.x - rect.left, 0 ,event.y - rect.top);
    cubes.addObjects(cube);
    drawObjects(cubes,canvas);
  });

  zy.addEventListener('click', function(event) {
    cubes = getCubes();
    var cube = new Cube();
    var rect = xy.getBoundingClientRect();
    cube.createCube(0, event.x - rect.left, event.y - rect.top);
    cubes.addObjects(cube);
    drawObjects(cubes,canvas);
  });


  function buttonPressed(event){
    if(event.buttons == null)
      return event.which != 0;
    else
      return event.buttons != 0;
  }

  function moved(event){
    if(!buttonPressed(event))
      console.log("Parou!");
    else
    console.log("Desclique:",event.clientX, event.clientY);
  }
}
