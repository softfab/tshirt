const html = require('choo/html')
const svgPart = require('./svg-part')
const solver = require('./verlet-solver')

const svgConstrained = function (part, measurements) {
  const {points, symmetry, constraints} = part
  const solved = solver(points, constraints, symmetry, measurements)

  return svgPart(solved, constraints, symmetry, 500, 500)
}

module.exports = svgConstrained
