// Experiment to do n integrations of verlet system, 
// synchronous, not animated

const System = require('verlet-system')
const Point = require('verlet-point')
const Constraint = require('verlet-constraint')
const AngleConstraint = require('./verlet-constraint-angle-2d')


function pointToVertex (point) {
  return new Point({position: [point.x, point.y]})
}

function vertexToPoint (vertex) {
  return {x: vertex.position[0], y: vertex.position[1]}
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
  const systemVertices = points.map(pointToVertex)
  const baseDistances = verticesToDistances(systemVertices)
  const baseAngles = verticesToAngles(systemVertices)
  const {distances, angles} = constraints
  const systemConstraints = mergeDistances(systemVertices, baseDistances, distances, measurements)

  function tick() {
    // Integrate the physics
    system.integrate(systemVertices, 1000/60)

    // Distance constraint solving
    for (let i = 0, len = systemConstraints.length; i < len; i++) {
      systemConstraints[i].solve()
    }

    // Angle constraint solving
    for (let i = 0, len = baseAngles.length; i < len; i++) {
      baseAngles[i].solve()
    }
  }

  // Tick world synchronously
  for (let i = 0; i < 360; i++) {
    tick()
  }

  return systemVertices.map(vertexToPoint)
}

module.exports = solver
