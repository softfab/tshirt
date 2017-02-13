const html = require('choo/html')

const liMeasurement = function (measurement, index) {
  return html`
  <li>
    <label>
      ${measurement.key}
      <input type="number" value="${measurement.value}" disabled></input>
    </label>
  </li>
  `
}

const olMeasurements = function (measurements) {
  return html`
  <ol>
    ${measurements.map(liMeasurement)}
  </ol>
  `
}

module.exports = olMeasurements