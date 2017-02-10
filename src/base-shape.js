const html = require('choo/html')
const svgPoly = require('./svg-poly')

function renderPart (part, index, selected, send) {
  const {points} = part
  function onClick () {
    send('selectPart', index)
  }
  return html`
  <li
    style="
      background-color: ${selected ? 'cornsilk' : 'transparent'};
    "
    onclick=${onClick}
  >
    ${svgPoly(points)}
  </li>
  `
}

function BaseShape (parts, selectedIndex, send) {
  return html`
  <ol>
    ${parts.map(
      function (part, index) {
        const selected = (selectedIndex === index)
        console.log(selected)
        return renderPart(part, index, selected, send)
      }
    )}
  </ol>
  `
}

module.exports = BaseShape
