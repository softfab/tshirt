const {createSelector} = require('reselect')
const Parser = require('expr-eval').Parser
const xtend = require('xtend')

const solver = require('./verlet-solver')

// Expensive stuff should be cached til state.pattern.measurements changes
const getSolvedMeasurements = createSelector(
  [
    state => state.pattern.measurements.base,
    state => state.pattern.measurements.derived,
  ],
  function (base, derived) {
    let solved = {}
    for (let i = 0, len = base.length; i < len; i++) {
      const {key, value} = base[i]
      solved[key] = value
    }
    for (let i = 0, len = derived.length; i < len; i++) {
      const {key, value} = derived[i]
      solved[key] = Parser.evaluate(value, solved)
    }
    return solved
  }
)

// Do reflection for parts depending on other parts
const getPartsPoints = createSelector(
  [
    state => state.pattern.parts
  ],
  function (parts) {
    return parts.map(function (part) {
      const {id, from, reflect} = part
      if (from) {
        for (let i = 0, len = parts.length; i < len; i++) {
          const fromPart = parts[i]
          if (fromPart.id === from) {
            const xReflect = reflect.indexOf('x') > -1 ? -1 : 1
            const yReflect = reflect.indexOf('y') > -1 ? -1 : 1
            const points = fromPart.points.map(function (point) {
              return {x: point.x * xReflect, y: point.y * yReflect}
            })
            part = xtend(parts[i], {id, points})
            return part
          }
        }
      }
      return part
    })
  }
)

const getSolvedParts = createSelector(
  [
    getPartsPoints,
    getSolvedMeasurements 
  ],
  function (parts, measurements) {
    return parts.map(function (part) {
      const {points, constraints, symmetry} = part
      const solverSteps = 360
      return solver(points, constraints, symmetry, measurements, solverSteps)
    })
  }
)


module.exports = {getSolvedMeasurements, getPartsPoints, getSolvedParts}
