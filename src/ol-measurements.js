const html = require('choo/html')
const css = require('sheetify')

const prefix = css`
  :host input {
    width: 3rem;
  }
`

const liMeasurement = function (measurement, index) {
  const {key, value} = measurement
  const {send} = this

  function onInput (event) {
    const value = parseFloat(event.target.value)
    if (isNaN(value)) return
    send('setMeasurement', {key, value})
  }

  return html`
  <li>
    <label>
      ${key}
      <input type="number" value="${value}" oninput=${onInput} />
    </label>
  </li>
  `
}

const olMeasurements = function (measurements, send) {
  return html`
  <ol class="${prefix}">
    ${measurements.map(liMeasurement, {send})}
  </ol>
  `
}

module.exports = olMeasurements