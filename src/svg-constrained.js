const html = require('choo/html')
const svgPart = require('./svg-part')
const solver = require('./verlet-solver')

const svgConstrained = function (part, measurements, solverSteps, send) {
  const {points, symmetry, constraints} = part
  const solved = solver(points, constraints, symmetry, measurements, solverSteps)

  function onInput (event) {
    const value = parseFloat(event.target.value)
    send('setState', {solverSteps: value})
  }

  return html`
    <div>
      <input type="range" min="0" max="360" value="${solverSteps}" oninput=${onInput} style="width: 500px;" />
      ${svgPart(solved, constraints, symmetry, 500, 500)}
    </div>
  `
}

module.exports = svgConstrained
