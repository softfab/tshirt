console.log(Particulate, document.body)

const canvas = document.createElement('canvas')
const size = 500
canvas.width = size
canvas.height = size
document.body.appendChild(canvas)
const context = canvas.getContext('2d')

//

var PTCL = Particulate;
var PARTICLES = 150;
var LINK_DISTANCE = 2;
var GRAVITY = -0.02;
var system = PTCL.ParticleSystem.create(PARTICLES, 2);

var linkIndices = [];
var angleIndices = [];

system.each(function (i) {
  var a = i - 1;
  var b = i;

  if (i > 0 && i < PARTICLES - 1) {
    system.setPosition(i,
      (Math.random() - 0.5) * size,
      (Math.random() - 0.5) * size,
      (Math.random() - 0.5) * size);
  }

  if (i > 0) {
    linkIndices.push(a, b);
  }

  if (i > 0 && i < PARTICLES - 1) {
    angleIndices.push(a, b, b + 1);
  }
});

system.addConstraint(PTCL.DistanceConstraint.create(LINK_DISTANCE, linkIndices));
system.addConstraint(PTCL.AngleConstraint.create(Math.PI * 0.5, angleIndices));

var pinX = size/2;
var index0 = 0;
var index1 = PARTICLES - 1;
var pin0 = PTCL.PointConstraint.create([-pinX, 0, 0], index0);
var pin1 = PTCL.PointConstraint.create([ pinX, 0, 0], index1);

system.setWeight(index0, 0);
system.setWeight(index1, 0);
system.addPinConstraint(pin0);
system.addPinConstraint(pin1);


// VIZ

function draw (positions) {
  context.clearRect(0, 0, size, size)
  context.translate(pinX, pinX)
  context.beginPath()
  for (let i = 0, len = positions.length; i < len; i+=3) {
    const position = positions[i]
    context.lineTo(positions[i], positions[i+1])
  }
  context.stroke()
  context.translate(-pinX, -pinX)
}

function animate () {
  requestAnimationFrame(animate)
  system.tick(1);
  draw(system.positions)
}
animate()
