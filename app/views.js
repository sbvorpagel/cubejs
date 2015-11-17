function startViews() {
  var xy = document.getElementById("view_xy");
  if (xy && xy.getContext) {
    ctxy = xy.getContext("2d");
    //aqui vai o loop
  }
  //Adiciona a função click apenas no canvas, xy retorna 1
  xy.addEventListener('click', function(event) {
    alert("sou um XY, click em: " + event.x + ", " + event.y);
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

  var zy = document.getElementById("view_zy");
  if (zy && zy.getContext) {
    ctzy = zy.getContext("2d");
    //aqui vai o loop
  }
  //Adiciona a função click apenas no canvas, yz retorna 3
  zy.addEventListener('click', function(event) {
    alert("sou um ZY");

  });

  var view = document.getElementById("view");
  if (view && view.getContext) {
    ctview = view.getContext("2d");
    //aqui vai o loop
  }
  //Adiciona a função click apenas no canvas, pers retorna 4
  view.addEventListener('click', function(event) {
    alert("sou uma View");

  });
}
