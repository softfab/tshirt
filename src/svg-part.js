const html = require('choo/html')
const {pointsFit, pointsWithSymmetry, dClosed, unitVector, pointAdd} = require('./geometry.js')

function line (a, b, width = 1, stroke = 'green') {
  return html`<line
    x1=${a.x}
    y1=${a.y}
    x2=${b.x}
    y2=${b.y}
    stroke-width="${width}"
    stroke="${stroke}"
  />`
}

function lineDistance (distance, points) {
  // TODO show diff / stretch
  let lines = []
  for (let i = 0, len = distance.points.length; i < len - 1; i++) {
    let a = distance.points[i]
    if (a < 0) a = points.length + a
    let b = distance.points[i+1]
    if (b < 0) b = points.length + b

    lines.push(line(points[a], points[b], 1, 'blue'))
  }
  return lines
}

function gDistances (distances, points) {
  return html`
  <g>
    ${distances.map(function (distance) { return lineDistance(distance, points) })}
  </g>
  `
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
  }
  const r = 10
  const angleStart = pointAdd(unitVector(b, a, r), b)
  const angleEnd = pointAdd(unitVector(b, c, r), b)
  const largeArc = (angle || restingAngle) > Math.PI/2 ? 1 : 0
  return html`
  <g>
    <path d="
      M ${b.x} ${b.y}
      L ${angleStart.x} ${angleStart.y}
      A ${r} ${r} 0 ${largeArc} 0 ${angleEnd.x} ${angleEnd.y}
      Z
    " stroke="black" fill="${fill}" />
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

function gPoint (point, index, count, symmetry) {
  if (symmetry && index > count/2) {
    index = index - count
  }
  return html`
  <g transform="translate(${point.x} ${point.y})">
    <rect x="5" y="-10" width="20" height="20" fill="rgba(255, 255, 255, 0.75)" stroke="none" />
    <circle cx="0" cy="0" r="2" fill="black" stroke="none" />
    <text x="10" y="5">${index}</text>
  </g>
  `
}

function gPoints (points, symmetry) {
  const count = points.length
  return html`
  <g>
    ${points.map(function (point, index) { return gPoint(point, index, count, symmetry)})}
  </g>
  `
}

function svgPart (points, symmetry = false, constraints = null, width = 72, height = 72, systemDistances = null, systemAngles = null) {
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
        fill="#fff" stroke="#000" stroke-width="1"
      />
      ${constraints && constraints.distances && gDistances(constraints.distances, points)}
      ${systemAngles && gAngles(systemAngles, points)}
      ${symmetry && line(points[0], points[lastIndex])}
      
      ${(width >= 200) && gPoints(points, symmetry)}
    </svg>
  `
}

module.exports = svgPart
