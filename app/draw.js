/*
  Function responsible for drawing the objects
  on all the four canvas.

  Parameters: cubes  - a list of all the current cubes
              canvas - a list of all the created canvas
*/

function drawObjects() {

  /*
    Used to access this.cubes ince we can't access this.cubes
    directly from the drawing functions.
  */

  function visible(a, b){
    if ((a[0]*b[0] + a[1]*b[1] + a[2]*b[2]) >= 0) return true;
    return false;
  }

  // Draws the objects on the xy canvas
  drawXY = function() {
    var list = CUBES.getObjects();
 
    var processed = 0;
    var i_stack = new Array();  // indexes stack
    var obj_stack = new Array();// objects stack
    var current = list;
    var next;
    var index = 0;              // current index;
    var color = "#000000";
    
      
    while(processed != TOTAL){
      /* Checks if the object is selected and must be ploted with a blue color */
      if((obj_stack.length == 0) && (i_stack.length == 0)){
        for(var i = 0; i < SELECTED.length; i++){
            if(index == SELECTED[i]){
                color = "#2E9AFE";
                break;
            }else{
                color = "#000000";
            }
        }
      }

      try{
        next = current[index].getObjects();
        obj_stack.push(current);
        i_stack.push(index);
        current = next;
      }
      catch(next){
        /* Draw the cube on the canvas */
        cube = current[0];
        
        for(var i = 0; i < 6; i ++){    
          var f = cube.faces[i];
          if (visible(cube.normal(i), [0,0,1]) || !BUTTON_VISIBLE) {
            ctxy.strokeStyle=color;

            ctxy.beginPath();
            ctxy.moveTo(cube.vertices[[f[0]]].x, cube.vertices[[f[0]]].y);
            ctxy.lineTo(cube.vertices[[f[1]]].x, cube.vertices[[f[1]]].y);
            ctxy.lineTo(cube.vertices[[f[2]]].x, cube.vertices[[f[2]]].y);
            ctxy.lineTo(cube.vertices[[f[3]]].x, cube.vertices[[f[3]]].y);
            ctxy.closePath();
            ctxy.stroke();
          }
        }
        current = obj_stack.pop();
        index = i_stack.pop();
        index++;
        processed++;
      }
    }
  }

  drawXZ = function() {
    var list = CUBES.getObjects();
 
    var processed = 0;
    var i_stack = new Array();  // indexes stack
    var obj_stack = new Array();// objects stack
    var current = list;
    var next;
    var index = 0;              // current index;
    var color = "#000000";
    
    while(processed != TOTAL){
      /* Checks if the object is selected and must be ploted with a blue color */
      if((obj_stack.length == 0) && (i_stack.length == 0)){
        for(var i = 0; i < SELECTED.length; i++){
            if(index == SELECTED[i]){
                color = "#2E9AFE";
                break;
            }else{
                color = "#000000";
            }
        }
      }
      
      try{
        next = current[index].getObjects();
        obj_stack.push(current);
        i_stack.push(index);
        current = next;
      }
      catch(next){
        /* Draw the cube on the canvas */
        cube = current[0];

        for(var i = 0; i < 6; i ++){    
          var f = cube.faces[i];
          if (visible(cube.normal(i), [0,0,1]) || !BUTTON_VISIBLE) {
            ctxz.strokeStyle=color;
            ctxz.beginPath();
            ctxz.moveTo(cube.vertices[[f[0]]].x, cube.vertices[[f[0]]].z);
            ctxz.lineTo(cube.vertices[[f[1]]].x, cube.vertices[[f[1]]].z);
            ctxz.lineTo(cube.vertices[[f[2]]].x, cube.vertices[[f[2]]].z);
            ctxz.lineTo(cube.vertices[[f[3]]].x, cube.vertices[[f[3]]].z);
            ctxz.closePath();
            ctxz.stroke();
          
          }
        }
        current = obj_stack.pop();
        index = i_stack.pop();
        index++;
        processed++;
      }
    }
  }

  drawZY = function() {
    var list = CUBES.getObjects();
 
    var processed = 0;
    var i_stack = new Array();  // indexes stack
    var obj_stack = new Array();// objects stack
    var current = list;
    var next;
    var index = 0;              // current index;
    var color = "#000000";
    
    while(processed != TOTAL){
      /* Checks if the object is selected and must be ploted with a blue color */
      if((obj_stack.length == 0) && (i_stack.length == 0)){
        for(var i = 0; i < SELECTED.length; i++){
            if(index == SELECTED[i]){
                color = "#2E9AFE";
                break;
            }else{
                color = "#000000";
            }
        }
      }

      try{
        next = current[index].getObjects();
        obj_stack.push(current);
        i_stack.push(index);
        current = next;
      }
      catch(next){
        /* Draw the cube on the canvas */
        cube = current[0];

        for(var i = 0; i < 6; i ++){    
          var f = cube.faces[i];
          if (visible(cube.normal(i), [0,0,1]) || !BUTTON_VISIBLE) {
            ctzy.strokeStyle=color;
            
            ctzy.beginPath();
            ctzy.moveTo(cube.vertices[[f[0]]].z, cube.vertices[[f[0]]].y);
            ctzy.lineTo(cube.vertices[[f[1]]].z, cube.vertices[[f[1]]].y);
            ctzy.lineTo(cube.vertices[[f[2]]].z, cube.vertices[[f[2]]].y);
            ctzy.lineTo(cube.vertices[[f[3]]].z, cube.vertices[[f[3]]].y);
            ctzy.closePath();
            ctzy.stroke();
          }
        }
        current = obj_stack.pop();
        index = i_stack.pop();
        index++;
        processed++;
      }
    }
  }
  
  drawView = function() {
    var list = CUBES.getObjects();
 
    var processed = 0;
    var i_stack = new Array();  // indexes stack
    var obj_stack = new Array();// objects stack
    var current = list;
    var next;
    var index = 0;              // current index;
    var color = "#000000";

    while(processed != TOTAL){
      /* Checks if the object is selected and must be ploted with a blue color */
      if((obj_stack.length == 0) && (i_stack.length == 0)){
        for(var i = 0; i < SELECTED.length; i++){
            if(index == SELECTED[i]){
                color = "#2E9AFE";
                break;
            }else{
                color = "#000000";
            }
        }
      }

      try{
        next = current[index].getObjects();
        obj_stack.push(current);
        i_stack.push(index);
        current = next;
      }
      catch(next){
        /* Draw the cube on the canvas */
        cube = current[0];
        
        crc = new CRC();
        crc.generateCrc(VRP, P, view_up);
        newcube = mf.matrixMultiplication(crc.getCrc(), cube.cube2matrix());

        vis = new Visualization();

        if (BUTTON_VISUALIZATION) {
          crc = new CRC();
          crc.generateCrc(VRP, P);
          newcube = mf.matrixMultiplication(crc.getCrc(), cube.cube2matrix());
          newnewcube = vis.isometric(newcube);
          cube_draw = newnewcube;
        } else {
          vrpl = mf.matrixMultiplication(crc.getCrc(), [VRP])[0];
          pl = mf.matrixMultiplication(crc.getCrc(), [P])[0];
          perspectiva = vis.perspective(vrpl, pl, Math.abs(pl[2]));
          newnewcube = mf.matrixMultiplication(perspectiva, newcube);
          newnewnewcube = mf.normalizeMatrix(newnewcube);
          cube_draw = newnewnewcube;
        }
       
        for(var i = 0; i < 6; i ++){    
          var f = cube.faces[i];
          if (visible(cube.normal(i), [0,0,1]) || !BUTTON_VISIBLE) {
            ctview.strokeStyle=color;

            ctview.beginPath();
            ctview.moveTo(cube_draw[f[0]][0], cube_draw[f[0]][1]);
            ctview.lineTo(cube_draw[f[1]][0], cube_draw[f[1]][1]);
            ctview.lineTo(cube_draw[f[2]][0], cube_draw[f[2]][1]);
            ctview.lineTo(cube_draw[f[3]][0], cube_draw[f[3]][1]);
            ctview.closePath();
            ctview.stroke();
          }
        }
        current = obj_stack.pop();
        index = i_stack.pop();
        index++;
        processed++;
      }
    }
  }

  drawFlat = function() {
    var list = CUBES.getObjects();
    for(var j = 0; j < list.length; j++){
      var cubes = list[j].getObjects();
      for (var x = 0; x < cubes.length; x++) {
        var cube = cubes[x];
        crc = new CRC();
        crc.generateCrc(VRP, P, view_up);
        newcube = mf.matrixMultiplication(crc.getCrc(), cube.cube2matrix());

        vis = new Visualization();

        if (BUTTON_VISUALIZATION) {
          crc = new CRC();
          crc.generateCrc(VRP, P);
          newcube = mf.matrixMultiplication(crc.getCrc(), cube.cube2matrix());
          newnewcube = vis.isometric(newcube);
          cube_draw = newnewcube;
        } else {
          vrpl = mf.matrixMultiplication(crc.getCrc(), [VRP])[0];
          pl = mf.matrixMultiplication(crc.getCrc(), [P])[0];
          perspectiva = vis.perspective(vrpl, pl, Math.abs(pl[2]));
          newnewcube = mf.matrixMultiplication(perspectiva, newcube);
          newnewnewcube = mf.normalizeMatrix(newnewcube);
          cube_draw = newnewnewcube;
        }

      cube_ant = cube.cube2matrix();
      for (var i = 0; i < 6; i++) {
          if (visible(cube.normal(i), [0,0,1]) || !BUTTON_VISIBLE) {
            ctview.strokeStyle="#000000";
            ctxy.strokeStyle="#000000";
            ctxz.strokeStyle="#000000";
            ctzy.strokeStyle="#000000";
            ctview.Style="#000000";
            ctxy.fillStyle="#000000";
            ctxz.fillStyle="#000000";
            ctzy.fillStyle="#000000";

            for (var nx = 0; nx < SELECTED.length; nx++) {
              if (SELECTED[nx] == j) {
                ctview.strokeStyle="#2E9AFE";
                ctxy.strokeStyle="#2E9AFE";
                ctxz.strokeStyle="#2E9AFE";
                ctzy.strokeStyle="#2E9AFE";
              }
            }
            poly=getPolXY(cube_ant, cube.getFace(i));
            ctxy.beginPath();
            ctxy.moveTo(poly[0], poly[1]);
            for( item=2 ; item < poly.length-1 ; item+=2 ){ctxy.lineTo( poly[item] , poly[item+1] )}
            ctxy.closePath();
            ctxy.fill();
            ctxy.stroke();
            ctxz.beginPath();
            poly=getPolXZ(cube_ant, cube.getFace(i));
            ctxz.moveTo(poly[0], poly[1]);
            for( item=2 ; item < poly.length-1 ; item+=2 ){ctxz.lineTo( poly[item] , poly[item+1] )}
            ctxz.closePath();
            ctxz.fill();
            ctxz.stroke();
            ctzy.beginPath();
            poly=getPolZY(cube_ant, cube.getFace(i));
            ctzy.moveTo(poly[0], poly[1]);
            for( item=2 ; item < poly.length-1 ; item+=2 ){ctzy.lineTo( poly[item] , poly[item+1] )}
            ctzy.closePath();
            ctzy.fill();
            ctzy.stroke();
            poly=getPolXY(cube_draw, cube.getFace(i));
            ctview.moveTo(poly[0], poly[1]);
            for( item=2 ; item < poly.length-1 ; item+=2 ){ctview.lineTo( poly[item] , poly[item+1] )}
            ctview.closePath();
            ctview.fill();
            ctview.stroke();
          }
        }
      }
    }
  }

  getPolXY = function (c, ind) {
    b = new Array(8);
    b[0] = c[ind[0]][0];
    b[1] = c[ind[0]][1];
    b[2] = c[ind[1]][0];
    b[3] = c[ind[1]][1];
    b[4] = c[ind[2]][0];
    b[5] = c[ind[2]][1];
    b[6] = c[ind[3]][0];
    b[7] = c[ind[3]][1];
    return b
  }

  getPolXZ = function (c, ind) {
    b = new Array(8);
    b[0] = c[ind[0]][0];
    b[1] = c[ind[0]][2];
    b[2] = c[ind[1]][0];
    b[3] = c[ind[1]][2];
    b[4] = c[ind[2]][0];
    b[5] = c[ind[2]][2];
    b[6] = c[ind[3]][0];
    b[7] = c[ind[3]][2];
    return b
  }

  getPolZY = function (c, ind) {
    b = new Array(8);
    b[0] = c[ind[0]][2];
    b[1] = c[ind[0]][1];
    b[2] = c[ind[1]][2];
    b[3] = c[ind[1]][1];
    b[4] = c[ind[2]][2];
    b[5] = c[ind[2]][1];
    b[6] = c[ind[3]][2];
    b[7] = c[ind[3]][1];
    return b
  }

  // Clears all the canvas and draws the modified objects
  ctxy.clearRect(0,0,this.canvas[0].width,this.canvas[0].height) // Canvas xy
  ctxz.clearRect(0,0,this.canvas[1].width,this.canvas[1].height) // Canvas xz
  ctzy.clearRect(0,0,this.canvas[2].width,this.canvas[2].height) // Canvas zy
  ctview.clearRect(0,0,this.canvas[2].width,this.canvas[2].height) // Canvas zy
  drawXY();
  drawZY();
  drawXZ();
  drawView();
  if (BUTTON_FLAT) drawFlat();

}
