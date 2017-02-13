const html = require('choo/html')
const svgPoly = require('./svg-poly')
const solver = require('./verlet-solver')

const svgConstrained = function (part, measurements) {
  const {points, symmetry, constraints} = part
  const solved = solver(points, constraints, measurements)

  return svgPoly(solved, symmetry, 500, 500)
}

module.exports = svgConstrained
