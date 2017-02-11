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
  const width = right - left
  const height = top - bottom
  return {left, bottom, width, height}
}

function closedPath (points) {
  let path = 'M '
  for (let i = 0, len = points.length; i < len; i++) {
    const {x, y} = points[i]
    path += x + ' ' + y + ' L '
  }
  path += points[0].x + ' ' + points[0].y
  return path
}

function fit (points, fitWidth, fitHeight, padding = 4) {
  fitWidth -= padding * 2
  fitHeight -= padding * 2
  const {left, bottom, width, height} = minMaxBox(points)
  const scale = Math.min(fitWidth/width, fitHeight/height)
  const paddingLeft = Math.max(0, (fitWidth - (width * scale)) / 2)
  const paddingTop = Math.max(0, (fitHeight - (height * scale)) / 2)
  return points.map(function (point) {
    return {
      x: ((point.x - left) * scale) + paddingLeft + padding,
      y: ((point.y - bottom) * scale) + paddingTop + padding,
    }
  })
}

function svgPoly (points, width = 72, height = 72) {
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
        d="${closedPath(fit(points, width, height))}"
        fill="#fff" stroke="black" stroke-width="1"
      />
    </svg>
  `
}

module.exports = svgPoly
