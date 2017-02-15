const html = require('choo/html')
const {pointsFit, pointsWithSymmetry, dClosed, unitVector, pointAdd} = require('./geometry.js')

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
  return line(points[a], points[b])
}

function arcAngle (systemAngle, points) {
  const {restingAngle, angle, diff} = systemAngle
  const a = points[systemAngle.points[0].index]
  const b = points[systemAngle.points[1].index]
  const c = points[systemAngle.points[2].index]
  let fill = 'transparent'
  if (angle != null) {
    const alpha = Math.abs(diff) / Math.PI
    fill = `rgba(255,0,0,${alpha})`
    if (alpha > 0.5) { console.log(restingAngle, angle) }
  }
  const angleStart = pointAdd(unitVector(b, a, 10), b)
  const angleEnd = pointAdd(unitVector(b, c, 10), b)
  const largeArc = (angle || restingAngle) > Math.PI/2 ? 1 : 0
  return html`
  <g>
    <path d="M ${b.x} ${b.y} L ${angleStart.x} ${angleStart.y} A 10 10 0 ${largeArc} 0 ${angleEnd.x} ${angleEnd.y} Z" stroke="black" fill="${fill}" />
    <circle cx="${b.x}" cy="${b.y}" r="3" fill="none" stroke="black" />
  </g>
  `
}

function gAngles (systemAngles, points) {
  return html`
  <g>
    ${systemAngles.map(function (angle) { return arcAngle(angle, points) })}
  </g>
  `
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

function svgPart (points, constraints = null, symmetry = false, width = 72, height = 72, systemDistances = null, systemAngles = null) {
  const lastIndex = points.length-1
  // if (symmetry) {
  //   points = pointsWithSymmetry(points)
  // }
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
      ${systemAngles && gAngles(systemAngles, points)}
    </svg>
  `
}

module.exports = svgPart
