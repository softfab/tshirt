const startApp = require('./src/app')

// Measurement keys from http://developer.bodylabs.com/red_api_measurements.html

const pattern = {
  measurements: {
    'neck_base': 200,
    'across_back_shoulder_neck_base_shoulder': 200,
    'along_back_neck_base_to_gluteal_hip': 200,
    'chest': 400,
    'underbust': 350,
    'mid_upper_arm_left': 200,
    'shoulder_elbow_wrist_left': 400,
    'shoulder_to_midhand_left': 380,
    'wrist_left': 100,
  },
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
    {
      points: [
        {x: -10, y: 0},
        {x: 0, y: 10},
        {x: 5, y: 0},
        {x: 0, y: -10},
      ],
      distances: [
      ],
      angles: [
      ],
    },
  ],
}

const el = startApp({pattern})
document.body.appendChild(el)
