function Cubes() {
  this.cubes = [];

  this.addCube = function(cube) {
    this.cubes.push(cube);
  }

  this.getCubes = function() {
    return this.cubes;
  }
}
