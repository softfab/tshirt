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

function svgPoly (points, symmetry = false, width = 72, height = 72) {
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
      ${symmetry && line(points[0], points[lastIndex])}
    </svg>
  `
}

module.exports = svgPoly
