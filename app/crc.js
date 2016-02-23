function CRC() {
  this.VRP = [];
  this.P = [];
  this.N = [];
  this.n = [];
  this.V = [];
  this.v = [];
  this.U = [];
  this.u = [];
  this.crcMatrix = [];

  this.getDP = function() {
    console.log("o dp é", DP);
    return DP;
  }

  this.setVRP = function(vrp) {
    this.VRP = vrp;
  }

  this.setP = function(p) {
    this.P = p;
  }

  this.calculateN = function() {
    this.N = [VRP[0]-P[0], VRP[1]-P[1], VRP[2]-P[2]];
  }

  this.calculate_n = function() {
    this.n = mf.normalize(this.N);
  }

  this.calculateV = function() {
    vn = [view_up[0]*this.n[0] +
          view_up[1]*this.n[1] +
          view_up[2]*this.n[2]];
    this.V = [view_up[0]-(vn*this.n[0]),
              view_up[1]-(vn*this.n[1]),
              view_up[2]-(vn*this.n[2])];
  }

  this.calculate_v = function() {
    this.v = mf.normalize(this.V);
  }

  this.calculateU = function() {
    this.U = mf.vectorMultiplication(this.v, this.n);
  }

  this.calculate_u = function() {
    this.u = mf.normalize(this.U);
  }

  this.calculateCrcMatrix = function() {
    this.crcMatrix = [
      [this.u[0], this.u[1], this.u[2], -(mf.scalarMultiplication(this.VRP, this.u))],
      [this.v[0], this.v[1], this.v[2], -(mf.scalarMultiplication(this.VRP, this.v))],
      [this.n[0], this.n[1], this.n[2], -(mf.scalarMultiplication(this.VRP, this.n))],
      [0,         0,         0,         1]
    ];
  }

  this.getCrc = function() {
    return this.crcMatrix;
  }

  this.generateCrc = function(vrp, p) {
    this.setVRP(vrp);
    this.setP(p);
    this.calculateN();
    this.calculate_n();
    this.calculateV();
    this.calculate_v();
    this.calculateU();
    this.calculate_u();
    this.calculateCrcMatrix();
  }

}
