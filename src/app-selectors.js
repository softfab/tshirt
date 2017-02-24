const Parser = require('expr-eval').Parser
const {createSelector} = require('reselect')

const getMeasurements = function (state) {
  return state.pattern.measurements
}

// Expensive should be stuff cached til state.pattern.measurements changes
const getSolvedMeasurements = createSelector(
  [ getMeasurements ],
  (measurements) => {
    const {base, derived} = measurements
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

module.exports = {getSolvedMeasurements}
