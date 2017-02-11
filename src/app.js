const html = require('choo/html')
const choo = require('choo')
const xtend = require('xtend')

const baseShape = require('./base-shape')

const model = {
  state: {
    pattern: {},
    selectedPart: null,
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
  const {parts} = pattern

  return html`
    <main>
      <h1>Fit Pattern</h1>
      <h2>Base Shapes</h2>
      ${baseShape(parts, selectedPart, send)}
      <h2>Debug</h2>
      <pre>${JSON.stringify(state.pattern, null, 2)}</pre>
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
