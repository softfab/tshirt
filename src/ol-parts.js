const html = require('choo/html')
const xtend = require('xtend')
const svgPart = require('./svg-part')
// const component = require('nanocomponent')

const WIDTH = 72
const HEIGHT = 72

const liPart = /*component({
  render:*/ function (part, solvedPart, index, selected, send) {
    const {points, constraints, symmetry, id} = part
    const {systemPoints, systemDistances, systemAngles} = solvedPart

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
      ${svgPart(points, symmetry, null, WIDTH, HEIGHT)}
      ${svgPart(systemPoints, symmetry, constraints, WIDTH, HEIGHT, systemDistances, systemAngles)}
      ${id}
    </li>
    `
  }/*,
  onload: function () {
    console.log('onload part')
  },
  onunload: function () {
    console.log('onunload part')
  }
})*/

const olParts = /*component({
  render:*/ function (parts, solvedParts, selectedIndex, send) {
    return html`
    <ol>
      ${parts.map(
        function (part, index) {
          const selected = (selectedIndex === index)
          return liPart(part, solvedParts[index], index, selected, send)
        }
      )}
    </ol>
    `
  }/*,
  onload: function () {
    console.log('onload parts')
  },
  onunload: function () {
    console.log('onunload parts')
  }
})*/

module.exports = olParts
