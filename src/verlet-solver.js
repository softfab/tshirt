// Experiment to do n integrations of verlet system, 
// synchronous, not animated

const System = require('verlet-system')
const Constraint = require('verlet-constraint')
const Point = require('verlet-point')


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

function mergeConstraint (vertices, mutable, constraint, measurements) {
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

function mergeConstraints (vertices, baseConstraints, constraints, measurements) {
  let mutable = baseConstraints.slice()
  const {distances, angles} = constraints
  for (let i = 0, len = distances.length; i < len; i++) {
    mergeConstraint(vertices, mutable, distances[i], measurements)
  }
  return mutable
}

function verticesToConstraints (vertices) {
  const constraints = []
  for (var i = 0, len = vertices.length; i < len; i++) {
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

    constraints.push(
      new Constraint([vertices[a], vertices[b]], {stiffness: 0.2})
    )

    // constraints.push(
    //   new AngleConstraint(vertices[a], vertices[b], vertices[c], 0.9)
    // )
  }
  return constraints
}

function solver (points, constraints, measurements) {
  const system = System()
  const systemVertices = points.map(pointToVertex)
  const baseConstraints = verticesToConstraints(systemVertices)
  const systemConstraints = mergeConstraints(systemVertices, baseConstraints, constraints, measurements)

  function tick() {
      // Integrate the physics
      system.integrate(systemVertices, 1000/60)

      // Perform constraint solving
      for (let i = 0, len = systemConstraints.length; i < len; i++) {
        systemConstraints[i].solve()
      }
  }

  for (let i = 0; i < 360; i++) {
    tick()
  }

  return systemVertices.map(vertexToPoint)
}

module.exports = solver
