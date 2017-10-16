const html = require('choo/html')
const log = require('choo-log')
const choo = require('choo')
const xtend = require('xtend')
const css = require('sheetify')

const {getSolvedMeasurements, getPartsPoints, getSolvedParts} = require('./app-selectors')
const olParts = require('./ol-parts')
const olMeasurements = require('./ol-measurements')
const olDerived = require('./ol-derived')
const olConstraints = require('./ol-constraints')
const svgConstrained = require('./svg-constrained')

const prefix = css`
  @media all and (min-width: 950px) {
    :host section {
      float: left;
      width: 30%;
    }
  }
`

let defaultState = {
  pattern: {},
  selectedPart: 0,
  selectedPoint: null,
  solverSteps: 360,
}

function mainStore (state, emitter) {
  Object.assign(state, defaultState)
  
  emitter.on('selectPart', function (part) {
    state.selectedPart = part
    emitter.emit('render')
  })
  emitter.on('selectPoint', function (point) {
    state.selectedPoint = point
    emitter.emit('render')
  })
  emitter.on('setMeasurement', function (data) {
    const {pattern} = state
    const {key, value} = data
    const base = pattern.measurements.base.map((measurement) => {
      if (key === measurement.key) {
        return {key, value}
      }
      return measurement;
    })
    pattern.measurements = xtend(pattern.measurements, {base})
    // state = xtend(state, {})
    emitter.emit('render')
  })
  emitter.on('setState', function (newState) {
    Object.assign(state, newState)
    emitter.emit('render')
  })
}

function mainView (state, emit) {
  const {pattern, selectedPart, solverSteps} = state
  if (!pattern) {
    return html`<main><h1>loading...</h1></main>`
  }
  const {id, parts, measurements} = pattern
  const solvedMeasurements = getSolvedMeasurements(state)
  const reflectedParts = getPartsPoints(state)
  const solvedParts = getSolvedParts(state)

  function onSetSteps (event) {
    const value = parseInt(event.target.value, 10)
    emit('setState', {solverSteps: value})
  }

  return html`
    <main class="${prefix}">
      <h1>${id}</h1>
      <section>
        <h2>base measurements</h2>
        ${olMeasurements(measurements.base, emit)}
        todo: load from bodylabs
        <h2>derived values</h2>
        ${olDerived(measurements.derived, solvedMeasurements)}
        todo: add & edit
      </section>
      <section>
        <h2>base part shapes</h2>
        ${olParts(reflectedParts, solvedParts, selectedPart, emit)}
        <h2>constraints</h2>
        ${(selectedPart != null) && olConstraints(reflectedParts[selectedPart].constraints)}
        todo:
        <ul>
          <li>add parts</li>
          <li>edit path / drag points</li>
        </ul>
      </section>
      <section>
        <h2>solved shape</h2>
        <input type="range" min="0" max="360" value="${solverSteps}" oninput=${onSetSteps} style="width: 500px;" />
        ${(selectedPart != null) && svgConstrained(reflectedParts[selectedPart], solvedMeasurements, solverSteps, 500, 500, emit)}
        todo: select points in selected part, add/edit distance/angle constraints
      </section>
      <section>
        <h2>sewing order</h2>
        todo: sew sim
      </section>
      <section>
        <h2>take over world</h2>
        todo: site for sharing and commissioning (seamster?)
      </section>
      <section>
        <h2>debug</h2>
        <pre style="max-height: 50vh; overflow: auto;">${JSON.stringify(state, null, 2)}</pre>
      </section>
    </main>
  `
}

function startApp (initialState = {}, mountSelector = 'body') {
  Object.assign(defaultState, initialState)

  const app = choo()
  app.use(log())
  app.use(mainStore)
  app.route('/tshirt', mainView)
  app.route('*', mainView)
  app.mount(mountSelector)
}

module.exports = startApp
