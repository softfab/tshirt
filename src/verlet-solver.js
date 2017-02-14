// Experiment to do n integrations of verlet system, 
// synchronous, not animated

const System = require('verlet-system')
const Point = require('verlet-point')
const Constraint = require('verlet-constraint')
const {AngleConstraint, rotate} = require('./verlet-constraint-angle-2d')


function pointToVertex (point) {
  return new Point({position: pointToPosition(point)})
}

function pointToPosition (point) {
  return [point.x, point.y]
}

function vertexToPoint (vertex) {
  return positionToPoint(vertex.position)
}

function positionToPoint (position) {
  return {x: position[0], y: position[1]}
}

function verticesRotate (vertices, a1, b1, a2, b2) {
  function vectorAngle (a, b) {
    return Math.atan2(b[1] - a[1], b[0] - a[0])
  }
  const angle1 = vectorAngle(a1, b1)
  const angle2 = vectorAngle(a2, b2)
  const theta = angle1 - angle2
  const x = (a2[0] + b2[0]) / 2
  const y = (a2[1] + b2[1]) / 2
  const origin = [x, y]
  return vertices.map(function (vertex) {
    return rotate(vertex.position, origin, theta)
  })
}

function getDistance (constraint, measurements) {
  for (let i = 0, len = measurements.base.length; i < len; i++) {
    const {key, value} = measurements.base[i]
    if (constraint.distance === key) {
      return value
    }
  }
}

function mergeDistance (vertices, mutable, constraint, measurements) {
  const a = vertices[constraint.points[0]]
  const b = vertices[constraint.points[1]]
  const restingDistance = getDistance(constraint, measurements)
  const toMerge = new Constraint([a, b], {restingDistance, stiffness: 0.2})

  for (let i = 0, len = mutable.length; i < len; i++) {
    const base = mutable[i]
    if (base.points[0] === a && base.points[1] === b) {
      mutable[i] = toMerge
      return mutable
    }
  }

  mutable.push(toMerge)
  return mutable
}

function mergeDistances (vertices, baseConstraints, distances, measurements) {
  let mutable = baseConstraints.slice()
  for (let i = 0, len = distances.length; i < len; i++) {
    mergeDistance(vertices, mutable, distances[i], measurements)
  }
  return mutable
}

// Distance constraints from initial positions
function verticesToDistances (vertices) {
  const len = vertices.length
  return vertices.map(function (vertex, i) {
    var a = i
    var b = (i + 1) % len
    return new Constraint([vertices[a], vertices[b]], {stiffness: 0.2})
  })
}

// Angle constraints from initial positions
function verticesToAngles (vertices) {
  const len = vertices.length
  return vertices.map(function (vertex, i) {
    var a = i
    var b = (i + 1) % len
    var c = (i + 2) % len
    return new AngleConstraint([vertices[a], vertices[b], vertices[c]], {stiffness: 0.9})
  })
}

function solver (points, constraints, measurements) {
  const system = System()
  const baseVertices = points.map(pointToVertex)
  const baseDistances = verticesToDistances(baseVertices)
  const baseAngles = verticesToAngles(baseVertices)
  const {distances, angles} = constraints
  const mergedDistances = mergeDistances(baseVertices, baseDistances, distances, measurements)

  // // Prepend a pin to maintain basic orientation
  // const pinVertex = new Point({position: [points[0].x, points[0].y-100]})
  // const pinDistance = new Constraint([pinVertex, baseVertices[0]], {stiffness: 1.0})
  // const pinAngle = new AngleConstraint([pinVertex, baseVertices[0], baseVertices[1]], {stiffness: 1.0})

  // const systemVertices = [pinVertex].concat(baseVertices)
  // const systemDistances = [pinDistance].concat(mergedDistances)
  // const systemAngles = [pinAngle].concat(baseAngles)

  const systemVertices = baseVertices
  const systemDistances = mergedDistances
  const systemAngles = baseAngles

  function tick() {
    // Integrate the physics
    system.integrate(baseVertices, 1000/60)

    // Distance constraint solving
    for (let i = 0, len = systemDistances.length; i < len; i++) {
      systemDistances[i].solve()
    }

    // Angle constraint solving
    for (let i = 0, len = systemAngles.length; i < len; i++) {
      systemAngles[i].solve()
    }
  }

  // Tick world synchronously
  for (let i = 0; i < 360; i++) {
    tick()
  }

  // HACK to fix rotation
  const a1 = pointToPosition(points[0])
  const b1 = pointToPosition(points[points.length - 1])
  const a2 = baseVertices[0].position
  const b2 = baseVertices[baseVertices.length - 1].position
  const rotated = verticesRotate(baseVertices, a1, b1, a2, b2)

  return rotated.map(positionToPoint)
}

module.exports = solver
