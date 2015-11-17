window.onload = startDemo;

function Point3D(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.rotateX = function(angle) {
        var rad, cosa, sina, y, z
        rad = angle * Math.PI / 180
        cosa = Math.cos(rad)
        sina = Math.sin(rad)
        y = this.y * cosa - this.z * sina
        z = this.y * sina + this.z * cosa
        return new Point3D(this.x, y, z)
    }

    this.rotateY = function(angle) {
        var rad, cosa, sina, x, z
        rad = angle * Math.PI / 180
        cosa = Math.cos(rad)
        sina = Math.sin(rad)
        z = this.z * cosa - this.x * sina
        x = this.z * sina + this.x * cosa
        return new Point3D(x,this.y, z)
    }

    this.rotateZ = function(angle) {
        var rad, cosa, sina, x, y
        rad = angle * Math.PI / 180
        cosa = Math.cos(rad)
        sina = Math.sin(rad)
        x = this.x * cosa - this.y * sina
        y = this.x * sina + this.y * cosa
        return new Point3D(x, y, this.z)
    }

    this.project = function(viewWidth, viewHeight, fov, viewDistance) {
        var factor, x, y
        factor = fov / (viewDistance + this.z)
        x = this.x * factor + viewWidth / 2
        y = this.y * factor + viewHeight / 2
        return new Point3D(x, y, this.z)
    }
}

var vertices = [
    new Point3D(-1,1,-1),
    new Point3D(1,1,-1),
    new Point3D(1,-1,-1),
    new Point3D(-1,-1,-1),
    new Point3D(-1,1,1),
    new Point3D(1,1,1),
    new Point3D(1,-1,1),
    new Point3D(-1,-1,1)
];

// Define the vertices that compose each of the 6 faces. These numbers are
// indices to the vertex list defined above.
var faces = [[0,1,2,3],[1,5,6,2],[5,4,7,6],[4,0,3,7],[0,4,5,1],[3,2,6,7]]

var angle = 0;

function startDemo() {
      canvas = document.getElementById("thecanvas");
canvas2 = document.getElementById("thecanvas2");
canvas3 = document.getElementById("thecanvas3");
canvas4 = document.getElementById("thecanvas4");

    if( canvas && canvas.getContext ) {
        ctx = canvas.getContext("2d");

        setInterval(loop, 30);
    }
    if( canvas2 && canvas2.getContext ) {
        ctx2 = canvas2.getContext("2d");

        setInterval(loop, 30);
    }
    if( canvas3 && canvas3.getContext ) {
        ctx3 = canvas3.getContext("2d");

        setInterval(loop, 30);
    }
    if( canvas4 && canvas4.getContext ) {
        ctx4 = canvas4.getContext("2d");

        setInterval(loop, 30);
    }
}

function loop() {
    var t = new Array();

    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(0,0,580,367);
    ctx2.fillStyle = "rgb(255,255,255)";
    ctx2.fillRect(0,0,580,367);
    ctx3.fillStyle = "rgb(255,255,255)";
    ctx3.fillRect(0,0,580,367);
    ctx4.fillStyle = "rgb(255,255,255)";
    ctx4.fillRect(0,0,580,367	);

    for( var i = 0; i < vertices.length; i++ ) {
        var v = vertices[i];
        var r = v.rotateX(angle).rotateY(angle).rotateZ(angle);
        var p = r.project(400,200,128,3.5);
        t.push(p)
    }

    ctx.strokeStyle = "rgb(255, 0, 0)"
    ctx2.strokeStyle = "rgb(0, 0, 0)"
    ctx3.strokeStyle = "rgb(0, 0, 255)"
    ctx4.strokeStyle = "rgb(0,255,0)"
    for( var i = 0; i < faces.length; i++ ) {
        var f = faces[i]
        ctx.beginPath()
        ctx.moveTo(t[f[0]].x,t[f[0]].y)
        ctx.lineTo(t[f[1]].x,t[f[1]].y)
        ctx.lineTo(t[f[2]].x,t[f[2]].y)
        ctx.lineTo(t[f[3]].x,t[f[3]].y)
        ctx.closePath()
        ctx.stroke()

        ctx2.beginPath()
        ctx2.moveTo(t[f[0]].x,t[f[0]].y)
        ctx2.lineTo(t[f[1]].x,t[f[1]].y)
        ctx2.lineTo(t[f[2]].x,t[f[2]].y)
        ctx2.lineTo(t[f[3]].x,t[f[3]].y)
        ctx2.closePath()
        ctx2.stroke()

        ctx3.beginPath()
        ctx3.moveTo(t[f[0]].x,t[f[0]].y)
        ctx3.lineTo(t[f[1]].x,t[f[1]].y)
        ctx3.lineTo(t[f[2]].x,t[f[2]].y)
        ctx3.lineTo(t[f[3]].x,t[f[3]].y)
        ctx3.closePath()
        ctx3.stroke()

        ctx4.beginPath()
        ctx4.moveTo(t[f[0]].x,t[f[0]].y)
        ctx4.lineTo(t[f[1]].x,t[f[1]].y)
        ctx4.lineTo(t[f[2]].x,t[f[2]].y)
        ctx4.lineTo(t[f[3]].x,t[f[3]].y)
        ctx4.closePath()
        ctx4.stroke()
    }
    angle += 1;
}
