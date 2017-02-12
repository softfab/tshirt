const html = require('choo/html')
const svgPoly = require('./svg-poly')
// const component = require('nanocomponent')

const liPart = /*component({
  render:*/ function (part, index, selected, send) {
    const {points, symmetry, id} = part
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
      ${svgPoly(points, symmetry)}
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
  render:*/ function (parts, selectedIndex, send) {
    return html`
    <ol>
      ${parts.map(
        function (part, index) {
          const selected = (selectedIndex === index)
          return liPart(part, index, selected, send)
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
