const html = require('choo/html')
const choo = require('choo')
const xtend = require('xtend')
const css = require('sheetify')

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

const model = {
  state: {
    pattern: {},
    selectedPart: 0,
    selectedPoint: null,
    solverSteps: 360,
  },
  reducers: {
    selectPart: function (state, data) {
      return { selectedPart: data }
    },
    selectPoint: function (state, data) {
      return { selectPoint: data }
    },
    setMeasurement: function (state, data) {
      let {pattern} = state
      const base = pattern.measurements.base.slice()
      const {key, value} = data
      for (let i = 0, len = base.length; i < len; i++) {
        const measurement = base[i]
        if (measurement.key === key) {
          // ?
          base[i] = {key, value}
        }
      }
      pattern.measurements.base = base
      pattern = xtend(pattern, {})
      return {pattern}
    },
    setState: function (state, data) {
      return data
    }
  }
}

function mainView (state, prev, send) {
  const {pattern, selectedPart, solverSteps} = state
  const {id, parts, measurements} = pattern

  return html`
    <main class="${prefix}">
      <h1>${id}</h1>
      <section>
        <h2>base measurements</h2>
        ${olMeasurements(measurements.base, send)}
        todo: load from bodylabs
        <h2>derived values</h2>
        ${olDerived(measurements.derived)}
        todo: add & edit
      </section>
      <section>
        <h2>base part shapes</h2>
        ${olParts(parts, selectedPart, send)}
        <h2>constraints</h2>
        ${(selectedPart != null) && olConstraints(parts[selectedPart].constraints)}
        todo:
        <ul>
          <li>add parts</li>
          <li>edit path / drag points</li>
        </ul>
      </section>
      <section>
        <h2>solved shape</h2>
        ${(selectedPart != null) && svgConstrained(parts[selectedPart], measurements, solverSteps, send)}
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

function startApp (initialState) {
  const app = choo()
  app.router({default: '/'}, ['/', mainView])
  if (initialState) {
    model.state = xtend(model.state, initialState)
  }
  app.model(model)
  const el = app.start()
  return el
}


// const yo = require('yo-yo')

// class App {
//   constructor (initialState) {
//     this.el = this.render(initialState)
//   }
//   render (state) {
//     return yo`
//       <pre>${JSON.stringify(state, null, 2)}</pre>
//     `
//   }
//   setState (state) {
//     const el = this.render(state)
//     yo.update(this.el, el)
//   }
// }

module.exports = startApp
