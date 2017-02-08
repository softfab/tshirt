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

var pattern =
  [ [ [0, 0]
    , [100, 0]
    , [200, 100]
    , [100, 100]
    ]
  ]

// Geometry

function distanceBetween (A, B) {
  var aSquared = Math.pow((A[0] - B[0]), 2)
  var bSquared = Math.pow((A[1] - B[1]), 2)
  return Math.sqrt(aSquared + bSquared)
}

function angleBetween(A, B, C) {
  var AB = Math.sqrt(Math.pow(B[0]-A[0], 2)+ Math.pow(B[1]-A[1], 2))
  var BC = Math.sqrt(Math.pow(B[0]-C[0], 2)+ Math.pow(B[1]-C[1], 2))
  var AC = Math.sqrt(Math.pow(C[0]-A[0], 2)+ Math.pow(C[1]-A[1], 2))
  return Math.acos((BC * BC + AB * AB - AC * AC) / (2 * BC * AB))
}

// Physics

var PTCL = Particulate;
var PARTICLES = 0;

for (let i = 0, len = pattern.length; i < len; i++) {
  const polygon = pattern[i]
  let x = 0
  let y = 0
  PARTICLES += polygon.length
  for (let i = 0, len = polygon.length; i < len; i++) {
    const vector = polygon[i]
  }  
}

var BOUNCE = 0




var system = PTCL.ParticleSystem.create(PARTICLES, 2);

console.log(system)

system.each(function (i) {
  var a = i
  var b = i + 1
  if (b >= PARTICLES) {
    b = 0
  }
  var c = i + 2
  if (c >= PARTICLES) {
    c = 1
  }


  if (i > 0 && i < PARTICLES - 1) {
    system.setPosition(i
    , pattern[0][i][0]
    , pattern[0][i][1]
    , 0
    )
  }

  var linkDistance = distanceBetween(pattern[0][a], pattern[0][b])
  var linkIndices = [a, b]
  system.addConstraint(PTCL.DistanceConstraint.create(linkDistance, linkIndices));

  var angle = angleBetween(pattern[0][a], pattern[0][b], pattern[0][c])
  var angleIndices = [a, b, c]
  system.addConstraint(PTCL.AngleConstraint.create(angle, angleIndices));

  system.setWeight(i, 10)

});

var origin = [0.0, 0.0, 0.0];
var normal = [0.0, 0.0, 1.0];
var bounds = PTCL.BoundingPlaneConstraint.create(origin, normal, size2);
system.addConstraint(bounds);

var attractor = PTCL.PointForce.create([0.0, 0.0, 0.0]
, { type: PTCL.Force.ATTRACTOR
  , radius: size
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
