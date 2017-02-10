const html = require('choo/html')

function minMaxBox (points) {
  let top = -Infinity
  let right = -Infinity
  let bottom = Infinity
  let left = Infinity
  for (let i = 0, len = points.length; i < len; i++) {
    const {x, y} = points[i]
    top = Math.max(top, y)
    right = Math.max(right, x)
    bottom = Math.min(bottom, y)
    left = Math.min(left, x)
  }
  return [left, bottom, right-left, top-bottom].join(' ')
}

function path (points) {
  return 'M ' +
    points
      .map(function (point) {
        return point.x + ' ' + point.y
      })
      .join(' L ') +
    ' L ' +
    points[0].x + ' ' + points[0].y
}

function svgPoly (points, width = 72, height = 72) {
  return html`
    <svg
      width="${width}" height="${height}"
      viewBox="${minMaxBox(points)}"
    >
      <path
        d="${path(points)}"
        fill="none" stroke="black"
      />
    </svg>
  `
}

module.exports = svgPoly
