const html = require('choo/html')
const svgPoly = require('./svg-poly')

function renderPart (part) {
  const {points} = part
  return svgPoly(points)
}

function baseShape (parts) {
  return html`
  <div>
    ${parts.map(renderPart)}
  </div>
  `
}

module.exports = baseShape
