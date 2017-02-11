const html = require('choo/html')
const svgPoly = require('./svg-poly')
// const component = require('nanocomponent')

const renderPart = /*component({
  render:*/ function (part, index, selected, send) {
    const {points, id} = part
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

const partList = /*component({
  render:*/ function (parts, selectedIndex, send) {
    return html`
    <ol>
      ${parts.map(
        function (part, index) {
          const selected = (selectedIndex === index)
          return renderPart(part, index, selected, send)
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

module.exports = partList
