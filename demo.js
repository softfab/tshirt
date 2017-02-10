const startApp = require('./src/app')

const pattern = {
  parts: [
    {
      points: [
        {x: 0, y: 0},
        {x: 20, y: -10},
        {x: 40, y: -10},
        {x: 40, y: 10},
        {x: 20, y: 10},
        {x: 20, y: 60},
        {x: 0, y: 60},
        {x: -20, y: 60},
        {x: -20, y: 10},
        {x: -40, y: 10},
        {x: -40, y: -10},
        {x: -20, y: -10},
      ],
      distances: [
        // height
        {a: 0, b: 6, distance: 100},
        // bust
        {a: 4, b: 8, distance: 100},
        // sleeve
        {a: 1, b: 2, distance: 60},
        {a: 10, b: 11, distance: 60},
      ],
      // angles: [
      //   {a: 0, b: 1, c: 2, angle: Math.PI/4},
      // ],
    },
  ],
}

const el = startApp({pattern})
document.body.appendChild(el)
