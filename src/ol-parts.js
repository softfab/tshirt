const html = require('choo/html')
const xtend = require('xtend')
const svgConstrained = require('./svg-constrained')
const svgPart = require('./svg-part')
// const component = require('nanocomponent')

const WIDTH = 72
const HEIGHT = 72

const liPart = /*component({
  render:*/ function (part, index, selected, measurements, send) {
    const {points, constraints, symmetry, id} = part
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
      ${svgConstrained(part, measurements, 360, WIDTH, HEIGHT)}
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
  render:*/ function (parts, measurements, selectedIndex, send) {
    return html`
    <ol>
      ${parts.map(
        function (part, index) {
          const {id, from, reflect} = part
          if (from) {
            for (let i = 0, len = parts.length; i < len; i++) {
              const fromPart = parts[i]
              if (fromPart.id === from) {
                const xReflect = reflect.indexOf('x') > -1 ? -1 : 1
                const yReflect = reflect.indexOf('y') > -1 ? -1 : 1
                const points = fromPart.points.map(function (point) {
                  return {x: point.x * xReflect, y: point.y * yReflect}
                })
                part = xtend(parts[i], {id, points})
              }
            }
          }
          const selected = (selectedIndex === index)
          return liPart(part, index, selected, measurements, send)
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
