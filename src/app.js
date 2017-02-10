const html = require('choo/html')
const choo = require('choo')
const xtend = require('xtend')

const BaseShape = require('./base-shape')

const model = {
  state: {
    pattern: {},
    selectedPart: null,
    selectedPoint: null,
  },
  reducers: {
    setPart: function (state, data) {

    },
    setPoint: function (state, data) {

    },
    update: function (state, data) {
      console.log(state, data)
      return { title: data }
    }
  }
}

function mainView (state, prev, send) {
  return html`
    <main>
      ${BaseShape(state.pattern.parts)}
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
