function pointsBox (points) {
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

function pointReflect (p, p0, p1) {
  const dx = p1.x - p0.x
  const dy = p1.y - p0.y
  const a = (dx * dx - dy * dy) / (dx * dx + dy * dy)
  const b = 2 * dx * dy / (dx * dx + dy * dy)
  const x = a * (p.x - p0.x) + b * (p.y - p0.y) + p0.x
  const y = b * (p.x - p0.x) - a * (p.y - p0.y) + p0.y

  return {x, y}
}

function pointsWithSymmetry (points) {
  const simPoints = points.slice()
  const a = points[0]
  const b = points[points.length-1]
  let i = points.length - 1
  while (i > 0) {
    const point = points[i]
    simPoints.push(pointReflect(point, a, b))
    i--
  }
  return simPoints
}

// function pointsTranslate (points, p1, p2) {
//   const dx = p2.x - p1.x
//   const dy = p2.y - p1.y
//   return points.map(function (point) {
//     return {x: point.x + x, y: point.y + y}
//   })
// }

function pointsFit (points, fitWidth, fitHeight, padding = 4) {
  fitWidth -= padding * 2
  fitHeight -= padding * 2
  const {left, bottom, width, height} = pointsBox(points)
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

function dClosed (points) {
  let path = 'M '
  for (let i = 0, len = points.length; i < len; i++) {
    const {x, y} = points[i]
    path += x + ' ' + y + ' L '
  }
  path += points[0].x + ' ' + points[0].y
  return path
}

module.exports = {pointsFit, pointsWithSymmetry, dClosed}