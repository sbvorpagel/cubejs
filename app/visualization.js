function Visualization() {
  this.perspective = function(vrpl, pl, dp) {
    return [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, (-(pl[2]/dp)), (pl[2]*(vrpl[2]/dp))],
            [0, 0, -(1/dp), (vrpl[2]/dp)]
          ];
  }

  this.isometric = function(cube) {
    return mf.matrixMultiplication([[1, 0, 0 , 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]], cube);
  }
}
