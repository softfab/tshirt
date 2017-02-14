const html = require('choo/html')

const liDerived = function (measurement, index) {
  return html`
  <li>
    <label>
      ${measurement.key}
      <input type="text" value="${measurement.value}" disabled></input>
    </label>
  </li>
  `
}

const olDerived = function (measurements) {
  return html`
  <ol>
    ${measurements.map(liDerived)}
  </ol>
  `
}

module.exports = olDerived