var WIDTH = window.innerWidth
var HEIGHT = window.innerHeight
var size = Math.min(WIDTH, HEIGHT)
var size2 = size/2
var TAU = Math.PI * 2

var canvas = document.createElement('canvas')
canvas.width = WIDTH
canvas.height = HEIGHT
document.body.appendChild(canvas)
var context = canvas.getContext('2d')

// Verlet patch

AngleConstraint.prototype.draw = function(ctx) {
  var startAngle = Math.atan2(this.b.pos.y - this.a.pos.y, this.b.pos.x - this.a.pos.x) + Math.PI
	ctx.beginPath();
  ctx.arc(this.b.pos.x, this.b.pos.y, 10, startAngle, startAngle+this.angle)
	// ctx.moveTo(this.a.pos.x, this.a.pos.y);
	// ctx.lineTo(this.b.pos.x, this.b.pos.y);
	// ctx.lineTo(this.c.pos.x, this.c.pos.y);
	var tmp = ctx.lineWidth;
	ctx.lineWidth = 1;
	ctx.strokeStyle = "rgba(0,0,0,0.5)";
	ctx.stroke();
	ctx.lineWidth = tmp;
}


// Shirt

var pattern = {
  parts: [
    {
      points: [
        {x: 0, y: 0},
        {x: 20, y: -10},
        {x: 40, y: -10},
        {x: 40, y: 10},
        {x: 20, y: 10},
        {x: 20, y: 60},
        {x: 0, y: 60},
        {x: -20, y: 60},
        {x: -20, y: 10},
        {x: -40, y: 10},
        {x: -40, y: -10},
        {x: -20, y: -10},
      ],
      distances: [
        // height
        {a: 0, b: 6, distance: 100},
        // bust
        {a: 4, b: 8, distance: 100},
        // sleeve
        {a: 1, b: 2, distance: 60},
        {a: 10, b: 11, distance: 60},
      ],
      // angles: [
      //   {a: 0, b: 1, c: 2, angle: Math.PI/4},
      // ],
    },
  ],
}

// Geometry

function distanceBetween (A, B) {
  var aSquared = Math.pow((A.x - B.x), 2)
  var bSquared = Math.pow((A.y - B.y), 2)
  return Math.sqrt(aSquared + bSquared)
}

function angleBetween(A, B, C) {
  var AB = Math.sqrt(Math.pow(B.x-A.x, 2)+ Math.pow(B.y-A.y, 2))
  var BC = Math.sqrt(Math.pow(B.x-C.x, 2)+ Math.pow(B.y-C.y, 2))
  var AC = Math.sqrt(Math.pow(C.x-A.x, 2)+ Math.pow(C.y-A.y, 2))
  return Math.acos((BC * BC + AB * AB - AC * AC) / (2 * BC * AB))
}

// Physics

var sim = new VerletJS(WIDTH, HEIGHT, canvas)
sim.friction = 1
console.log(sim, pattern)

sim.composites = pattern.parts.map(function (part, index) {
  var composite = new sim.Composite()
  var points = part.points
  composite.particles = points.map(function (point, index) {
    return new Particle(new Vec2(point.x + WIDTH/2, point.y + HEIGHT/2))
  })

  // Pin first
  composite.pin(0, new Vec2(WIDTH/2, HEIGHT/2))

  for (var i = 0, len = points.length; i < len; i++) {
    // Distance and angle constraints from initial positions
    var a = i
    var b = i + 1
    var c = i + 2
    if (b >= len) {
      b = 0
      c = 1
    } else if (c >= len) {
      c = 0
    }

    // var linkDistance = distanceBetween(points[a], points[b])
    composite.constraints.push(
      new DistanceConstraint(composite.particles[a], composite.particles[b], 0.2)
    )

    // var angle = angleBetween(points[a], points[b], points[c])
    // var angleIndices = [a, b, c]
    // system.addConstraint(PTCL.AngleConstraint.create(angle, angleIndices));
    composite.constraints.push(
      new AngleConstraint(composite.particles[a], composite.particles[b], composite.particles[c], 0.9)
    )
  }

  for (var i = 0, len = part.distances.length; i < len; i++) {
    var distanceCo = part.distances[i]
    // system.addConstraint(PTCL.DistanceConstraint.create(distanceCo.distance, distanceCo.a, distanceCo.b))
    composite.constraints.push(
      new DistanceConstraint(composite.particles[distanceCo.a], composite.particles[distanceCo.b], 0.5, distanceCo.distance)
    )
  }

  return composite
})


function animate () {
  requestAnimationFrame(animate)
  sim.frame(16)
  sim.draw()
}
animate()
