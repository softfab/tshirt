console.log(Particulate, document.body)

var size = 500
var size2 = size/2
var TAU = Math.PI * 2

var LINK_DISTANCE = 300
var ANGLE = TAU/6

var canvas = document.createElement('canvas')
canvas.width = size
canvas.height = size
document.body.appendChild(canvas)
var context = canvas.getContext('2d')

// Shirt

var pattern =
  [ [ [0, 10]
    , [10, 0]
    , [0, -10]
    ]
  ]

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

var linkIndices = [];
var angleIndices = [];

system.each(function (i) {
  var a = i - 1;
  var b = i;

  if (i > 0 && i < PARTICLES - 1) {
    system.setPosition(i
    , 0
    , 0
    , 0
    )
  }

  if (i > 0) {
    linkIndices.push(a, b);
  }

  if (i > 0 && i < PARTICLES - 1) {
    angleIndices.push(a, b, b + 1);
  }

  system.setWeight(i, 10)

});

linkIndices.push(0, PARTICLES-1)
angleIndices.push(PARTICLES-1, 0, 1);

system.addConstraint(PTCL.DistanceConstraint.create(LINK_DISTANCE, linkIndices));
system.addConstraint(PTCL.AngleConstraint.create(ANGLE, angleIndices));

var origin = [0.0, 0.0, 0.0];
var normal = [0.0, 0.0, 1.0];
var bounds = PTCL.BoundingPlaneConstraint.create(origin, normal, size2);
system.addConstraint(bounds);

var index0 = 0
var pin0 = PTCL.PointConstraint.create([0, -size/4, 0], index0)
system.setWeight(index0, 0)
system.addPinConstraint(pin0)

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
