const html = require('choo/html')

const liDistance = function (constraint, index) {
  return html`
  <li>
    <label>
      ${constraint.points.join(', ')}
      ${constraint.distance}
    </label>
  </li>
  `
}

const liAngle = function (constraint, index) {
  return html`
  <li>
    <label>
      ${constraint.points.join(', ')}
      ${constraint.angle}
    </label>
  </li>
  `
}

const olConstraints = function (constraints) {
  const {distances, angles} = constraints
  return html`
  <div>
    <h3>distances</h3>
    <ol>
      ${distances.map(liDistance)}
    </ol>
    <h3>angles</h3>
    <ol>
      ${angles.map(liAngle)}
    </ol>
  </div>
  `
}

module.exports = olConstraints
