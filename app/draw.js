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

  // Clears all the canvas and draws the modified objects
  ctxy.clearRect(0,0,this.canvas[0].width,this.canvas[0].height) // Canvas xy
  ctxz.clearRect(0,0,this.canvas[1].width,this.canvas[1].height) // Canvas xz
  ctzy.clearRect(0,0,this.canvas[2].width,this.canvas[2].height) // Canvas zy
  ctview.clearRect(0,0,this.canvas[2].width,this.canvas[2].height) // Canvas zy
  drawXY();
  drawZY();
  drawXZ();
  drawView();

}
