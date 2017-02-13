const html = require('choo/html')
const choo = require('choo')
const xtend = require('xtend')

const olParts = require('./ol-parts')
const olMeasurements = require('./ol-measurements')
const svgConstrained = require('./svg-constrained')


const model = {
  state: {
    pattern: {},
    selectedPart: 0,
    selectedPoint: null,
  },
  reducers: {
    selectPart: function (state, data) {
      return { selectedPart: data }
    },
    selectPoint: function (state, data) {
      return { selectPoint: data }
    },
    update: function (state, data) {
      return { title: data }
    }
  }
}

function mainView (state, prev, send) {
  const {pattern, selectedPart} = state
  const {id, parts, measurements} = pattern

  return html`
    <main>
      <h1>${id}</h1>
      <section>
        <h2>base measurements</h2>
        ${olMeasurements(measurements.base)}
        todo: load from bodylabs
        <h2>derived values</h2>
        ${olMeasurements(measurements.derived)}
        todo: add & edit
      </section>
      <section>
        <h2>base part shapes</h2>
        ${olParts(parts, selectedPart, send)}
        todo:
        <ul>
          <li>add parts</li>
          <li>edit path / drag points</li>
        </ul>
      </section>
      <section>
        <h2>constraints</h2>
        ${(selectedPart != null) && svgConstrained(parts[selectedPart], measurements)}
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
        <pre style="max-height: 50vh; overflow: auto;">${JSON.stringify(state.pattern, null, 2)}</pre>
      </section>
    </main>
  `

  function update (e) {
    send('update', e.target.value)
  }
}

function startApp (initialState) {
  const app = choo()
  app.router(['/', mainView])
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
