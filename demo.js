const startApp = require('./src/app')

// Measurement keys from http://developer.bodylabs.com/red_api_measurements.html

const pattern = {
  metadata: {
    system: 'us',
  },
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
      id: 'front',
      symmetry: true,
      points: [
        {x: 1.0, y: -1.0},
        {x: 8.0, y: -1.7},
        {x: 11.0, y: -3.5},
        {x: 10.5, y: -11.0},
        {x: 11.0, y: -15.0},
        {x: 12.5, y: -19.5},
        {x: 10.0, y: -21.0},
        {x: 9.5, y: -25.2},
        {x: 1.0, y: -27.0},
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
      id: 'back',
      symmetry: true,
      points: [
        {x: 3.1, y: 1.0},
        {x: 1.0, y: 4.75},
        {x: 6.6, y: 9.6},
        {x: 8.0, y: 10.0},
        {x: 10.0, y: 11.0},
        {x: 10.0, y: 12.75},
        {x: 20.0, y: 11.5},
        {x: 26.25, y: 11.5},
        {x: 27.5, y: 6.0},
        {x: 28.0, y: 1.0},
      ],
      distances: [
      ],
      angles: [
      ],
    },
    {
      id: 'arm front',
      symmetry: false,
      points: [
        {x: 1.5, y: -1.0},
        {x: 1.0, y: -3.0},
        {x: 1.0, y: -6.1},
        {x: 17.0, y: -5.0},
        {x: 25.2, y: -3.5},
        {x: 24.75, y: -1.0},
        {x: 21.0, y: -1.5},
        {x: 16.0, y: -1.25},
        {x: 12.0, y: -1.5},
        {x: 7.0, y: -2.0},
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
