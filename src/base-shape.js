const html = require('choo/html')
const svgPoly = require('./svg-poly')

function renderPart (part, index) {
  const {points} = part
  return html`
  <li>
    ${svgPoly(points)}
  </li>
  `
}

function BaseShape (parts) {
  return html`
  <ol>
    ${parts.map(renderPart)}
  </ol>
  `
}

module.exports = BaseShape
