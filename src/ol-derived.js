const html = require('choo/html')

const olDerived = function (measurements, solvedMeasurements) {

  const liDerived = function (measurement, index) {
    return html`
    <li>
      <label>
        ${measurement.key}
        <input type="text" value="${measurement.value}" disabled></input>
        ${solvedMeasurements[measurement.key]}
      </label>
    </li>
    `
  }

  return html`
  <ol>
    ${measurements.map(liDerived)}
  </ol>
  `
}

module.exports = olDerived