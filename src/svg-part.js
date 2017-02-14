const html = require('choo/html')
const {pointsFit, pointsWithSymmetry, dClosed} = require('./geometry.js')

function line (a, b) {
  return html`<line
    x1=${a.x}
    y1=${a.y}
    x2=${b.x}
    y2=${b.y}
    stroke-width="1"
    stroke="green"
  />`
}

function lineDistance (distance, points) {
  let a = distance.points[0]
  if (a < 0) a = points.length + a
  let b = distance.points[1]
  if (b < 0) b = points.length + b
  console.log(points[a], points[b], points, a, b)
  return line(points[a], points[b])
}

function arcAngle (angle, points) {

}

function gConstraints (constraints, points) {
  const {distances, angles} = constraints
  if ((!distances || !distances.length) && (!angles || !angles.length)) {
    return null
  }

  return html`
  <g>
    ${distances && distances.map(function (distance) { return lineDistance(distance, points) })}
    ${angles && angles.map(function (angle) { return arcAngle(angle, points) })}
  </g>
  `
}

function svgPart (points, constraints = null, symmetry = false, width = 72, height = 72) {
  const lastIndex = points.length-1
  if (symmetry) {
    points = pointsWithSymmetry(points)
  }
  points = pointsFit(points, width, height)
  return html`
    <svg
      width="${width}" height="${height}"
      style="
        overflow:visible;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #eee;
      "
    >
      <path
        d="${dClosed(points)}"
        fill="#fff" stroke="black" stroke-width="1"
      />
      ${constraints && gConstraints(constraints, points)}
      ${symmetry && line(points[0], points[lastIndex])}
    </svg>
  `
}

module.exports = svgPart
