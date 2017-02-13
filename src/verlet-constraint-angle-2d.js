function angle (a, b) {
  return Math.atan2(a[0] * b[1] - a[1] * b[0], a[0] * b[0] + a[1] * b[1])
}

function angle2 (a, b, c) {
  const ab = [a[0] - b[0], a[1] - b[1]]
  const cb = [c[0] - b[0], c[1] - b[1]]
  return angle(ab, cb)
}

function rotate (point, origin, theta) {
  const x = point[0] - origin[0]
  const y = point[1] - origin[1]
	return [
    x * Math.cos(theta) - y * Math.sin(theta) + origin[0],
    x * Math.sin(theta) + y * Math.cos(theta) + origin[1]
  ]
}


function AngleConstraint(points, opt) {
  if (!points || points.length !== 3) {
    throw new Error('three points must be specified for the constraint')
  }
  if (!points[0].position || !points[1].position || !points[2].position) {
    throw new Error('must specify verlet-point or similar, with { position }')
  }
  this.points = points
  this.stiffness = 1.0
  if (opt && typeof opt.stiffness === 'number') {
    this.stiffness = opt.stiffness
  }

  if (opt && typeof opt.restingAngle === 'number') {
    this.restingAngle = opt.restingAngle
  } else {
    this.restingAngle = angle2(this.points[0].position, this.points[1].position, this.points[2].position)
  }
}

AngleConstraint.prototype.solve = function (step = 60) {
  const a = this.points[0]
  const b = this.points[1]
  const c = this.points[2]

  const angle = angle2(a.position, b.position, c.position)
  let diff = angle - this.restingAngle

	if (diff <= -Math.PI) {
		diff += 2*Math.PI
  } else if (diff >= Math.PI) {
		diff -= 2*Math.PI
  }

  diff *= this.stiffness * (1 / step)

  a.position = rotate(a.position, b.position, diff)
  c.position = rotate(c.position, b.position, -diff)
	b.position = rotate(b.position, a.position, diff)
	b.position = rotate(b.position, c.position, -diff)
}

module.exports = AngleConstraint

/*

function AngleConstraint(a, b, c, stiffness) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.angle = this.b.pos.angle2(this.a.pos, this.c.pos);
	this.stiffness = stiffness;
}

AngleConstraint.prototype.relax = function(stepCoef) {
	var angle = this.b.pos.angle2(this.a.pos, this.c.pos);
	var diff = angle - this.angle;
	
	if (diff <= -Math.PI)
		diff += 2*Math.PI;
	else if (diff >= Math.PI)
		diff -= 2*Math.PI;

	diff *= stepCoef*this.stiffness;
	
	this.a.pos = this.a.pos.rotate(this.b.pos, diff);
	this.c.pos = this.c.pos.rotate(this.b.pos, -diff);
	this.b.pos = this.b.pos.rotate(this.a.pos, diff);
	this.b.pos = this.b.pos.rotate(this.c.pos, -diff);
}

module.exports = AngleConstraint

*/