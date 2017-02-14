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

  console.log(systemAngles[systemAngles.length-1])

  return baseVertices.map(vertexToPoint)
}

module.exports = solver
