const html = require('choo/html')
const svgPart = require('./svg-part')
const solver = require('./verlet-solver')

const svgConstrained = function (part, measurements, solverSteps = 360, width = 500, height = 500) {
  const {points, symmetry, constraints} = part
  const {systemPoints, systemDistances, systemAngles} = solver(points, constraints, symmetry, measurements, solverSteps)

  return svgPart(systemPoints, symmetry, constraints, width, height, systemDistances, systemAngles)
}

module.exports = svgConstrained
