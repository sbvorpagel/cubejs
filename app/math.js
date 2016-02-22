function MATH() {

  this.vectorSize = function(vector) {
    return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2) +
                     Math.pow(vector[2], 2));
  }

  this.normalize = function(vector) {
    vec_size = this.vectorSize(vector);
    return [vector[0]/vec_size, vector[1]/vec_size, vector[2]/vec_size];
  }

  this.vectorMultiplication = function(vectorA, vectorB) {
    return [
      (vectorA[1] * vectorB[2]) - (vectorA[2] * vectorB[1]),
      (vectorA[2] * vectorB[0]) - (vectorA[0] * vectorB[2]),
      (vectorA[0] * vectorB[1]) - (vectorA[1] * vectorB[0])
    ];
  }

  this.scalarMultiplication = function(vectorA, vectorB) {
    return (vectorA[0]*vectorB[0]+vectorA[1]*vectorB[1]+vectorA[2]*vectorB[2]);
  }

  this.matrixMultiplication = function(a, b) {
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(bNumRows);
    for (var r = 0; r < bNumRows; r++) {
      m[r] = new Array(aNumRows);
    }
    for (var i = 0; i < aNumRows; i++) {
      for (var j = 0; j < bNumRows; j++) {
        var tmp = 0;
        for (var k = 0; k < aNumCols; k++) {
          tmp = tmp + a[i][k]*b[j][k];
        }
        m[j][i] = tmp;
      }
    }
    return m;
  }

  this.normalizeMatrix = function(m) {
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 4; j++) {
        m[i][j] = m[i][j]/m[i][3];
      }
    }
    return m;
  }
}
