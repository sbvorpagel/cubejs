function Point3D(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;

  this.getPoint = function() {
    return [this.x, this.y, this.z];
  }
}
