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

// Shirt

var pattern = {
  parts: [
    {
      points: [
        {x: 0, y: 0},
        {x: 20, y: 10},
        {x: 40, y: 10},
        {x: 40, y: -10},
        {x: 20, y: -10},
        {x: 20, y: -60},
        {x: 0, y: -60},
        {x: -20, y: -60},
        {x: -20, y: -10},
        {x: -40, y: -10},
        {x: -40, y: 10},
        {x: -20, y: 10},
      ],
      // distances: [
      //   {a: 3, b: 0, distance: 100},
      // ],
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

var PTCL = Particulate;
var PARTICLES = 0;
var part
var points

for (var i = 0, len = pattern.parts.length; i < len; i++) {
  part = pattern.parts[i]
  points = part.points
  PARTICLES += points.length
}

var system = PTCL.ParticleSystem.create(PARTICLES, 2);

for (var i = 0, len = points.length; i < len; i++) {
  // Initial position
  system.setPosition(i, points[i].x, points[i].y, 0)
  system.setWeight(i, 10)

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

  var linkDistance = distanceBetween(points[a], points[b])
  system.addConstraint(PTCL.DistanceConstraint.create(linkDistance, a, b));

  var angle = angleBetween(points[a], points[b], points[c])
  var angleIndices = [a, b, c]
  system.addConstraint(PTCL.AngleConstraint.create(angle, angleIndices));
}

// for (var i = 0, len = part.distances.length; i < len; i++) {
//   var distanceCo = part.distances[i]
//   system.addConstraint(PTCL.DistanceConstraint.create(distanceCo.distance, distanceCo.a, distanceCo.b))
// }


var origin = [0.0, 0.0, 0.0];
var normal = [0.0, 0.0, 1.0];
var bounds = PTCL.BoundingPlaneConstraint.create(origin, normal, size);
system.addConstraint(bounds);

var attractor = PTCL.PointForce.create([0.0, 0.0, 0.0]
, { type: PTCL.Force.ATTRACTOR
  , radius: size*4
  , intensity: 0.5
  }
)
system.addForce(attractor);


// VIZ

function draw (positions) {
  context.clearRect(0, 0, size, size)
  context.translate(size2, size2)
  context.beginPath()
  for (let i = 0, len = positions.length; i < len; i+=3) {
    const position = positions[i]
    context.lineTo(positions[i], positions[i+1])
  }
  context.closePath()
  context.stroke()
  context.translate(-size2, -size2)
}

function animate () {
  requestAnimationFrame(animate)
  system.tick(1);
  draw(system.positions)
}
animate()
