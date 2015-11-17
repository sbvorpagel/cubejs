function startViews() {
  var xy = document.getElementById("view_xy");
  if (xy && xy.getContext) {
    ctxy = xy.getContext("2d");
    //aqui vai o loop
  }
  //Adiciona a função click apenas no canvas, xy retorna 1
  xy.addEventListener('click', function(event) {
    alert("sou um XY, click em: " + event.x + ", " + event.y);
    //pega o valor "x" e "y" do cubo event.x e event.y
    //gerar um novo cubo passando o x e o y
    //add ele na lista de cubo
    //refazer todos os desenhos
  });

  //definir as cores da view
  ctxy.fillStyle = "rgb(240,240,240)";
  ctxy.fillRect(0,0,580,367);

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
