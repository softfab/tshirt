const startApp = require('./src/app')

// Measurement keys from http://developer.bodylabs.com/red_api_measurements.html

const pattern = {
  id: 'long-sleeve shirt',
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
      id: 'back',
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
      id: 'front',
      symmetry: true,
      points: [
        {x: 1, y: 3.1},
        {x: 4.75, y: 1},
        {x: 9.6, y: 6.6},
        {x: 10, y: 8},
        {x: 11, y: 10},
        {x: 12.75, y: 10},
        {x: 11.5, y: 20},
        {x: 11.5, y: 26.25},
        {x: 6, y: 27.5},
        {x: 1, y: 28},
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
    {
      id: 'arm back',
      symmetry: false,
      points: [
        {x: 1, y: 1.25},
        {x: 2.5, y: 4.5},
        {x: 3.25, y: 7.5},
        {x: 10.0, y: 5.5},
        {x: 18.0, y: 4.5},
        {x: 23.0, y: 4.25},
        {x: 26.1, y: 4.4},
        {x: 26.5, y: 2.5},
        {x: 17.0, y: 1.5},
        {x: 7.0, y: 1.0},
        {x: 4.0, y: 1.0 },
      ],
      distances: [
      ],
      angles: [
      ],
    },
    {
      id: 'arm top',
      symmetry: false,
      points: [
        {x: 1.0, y: 8.9},
        {x: 7.0, y: 9.25},
        {x: 20.0, y: 9.0},
        {x: 35.0, y: 8.25},
        {x: 35.0, y: 4.0},
        {x: 31.0, y: 4.5},
        {x: 23.0, y: 3.5},
        {x: 14.0, y: 1.5},
        {x: 12.5, y: 1.0},
        {x: 10.5, y: 1.0},
        {x: 4.0, y: 3.75},
        {x: 3.0, y: 6.25},
        {x: 2.0, y: 6.75},
        {x: 1.0, y: 7.0},
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
