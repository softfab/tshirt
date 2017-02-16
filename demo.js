const startApp = require('./src/app')

// Measurement keys from http://developer.bodylabs.com/red_api_measurements.html

const pattern = {
  id: 'long-sleeve shirt',
  metadata: {
    system: 'us',
  },
  measurements: {
    base: [
      {key: 'neck_base', value: 28},
      {key: 'across_back_shoulder_neck_base_shoulder', value: 10},
      {key: 'along_back_neck_base_to_gluteal_hip', value: 30},
      {key: 'chest', value: 50},
      // {key: 'underbust', value: 200},
      {key: 'waist', value: 45},
      {key: 'hips', value: 50},
      {key: 'mid_upper_arm_left', value: 30},
      {key: 'maximum_forearm_left', value: 20},
      {key: 'shoulder_elbow_wrist_left', value: 38},
      {key: 'shoulder_to_midhand_left', value: 36},
      {key: 'wrist_left', value: 15},
    ],
    derived: [
      {key: 'half_chest', value: 'chest / 2'},
      {key: 'half_waist', value: 'waist / 2'},
      {key: 'half_hips', value: 'hips / 2'},
      {key: 'third_neck', value: 'neck_base / 3'},
      {key: 'third_wrist', value: 'wrist_left / 3'},
      {key: 'around_shoulder', value: 'mid_upper_arm_left * 1.1'},
      {key: 'half_shoulder', value: 'around_shoulder / 2'},
      {key: 'quarter_shoulder', value: 'around_shoulder / 4'},
    ]
  },
  parts: [
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
      constraints: {
        distances: [
          {points: [0, 9], distance: 'along_back_neck_base_to_gluteal_hip'},
          {points: [5, -5], distance: 'half_chest'},
          {points: [6, -6], distance: 'half_waist'},
          {points: [7, -7], distance: 'half_hips'},
          {points: [1, 0, -1], distance: 'third_neck'},
          {points: [2, 3, 4, 5], distance: 'quarter_shoulder'},
        ],
        angles: [
        ],
      }
    },
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
      constraints: {
        distances: [
          {points: [0, 8], distance: 'along_back_neck_base_to_gluteal_hip'},
          {points: [5, -5], distance: 'half_chest'},
          {points: [3, -3], distance: 'half_waist'},
          {points: [2, -2], distance: 'half_hips'},
          {points: [5, 6, 7], distance: 'quarter_shoulder'},
          {points: [7, 8], distance: 'across_back_shoulder_neck_base_shoulder'},
        ],
        angles: [],
      }
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
      constraints: {
        distances: [
          {points: [4, 5], distance: 'third_wrist'},
          {points: [0, 1, 2], distance: 'quarter_shoulder'},
        ],
        angles: [],
      }
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
      constraints: {
        distances: [
          {points: [6, 7], distance: 'third_wrist'},
          {points: [0, 1, 2], distance: 'quarter_shoulder'},
        ],
        angles: [],
      }
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
      constraints: {
        distances: [
          {points: [10, 11, 12, 13], distance: 'third_neck'},
          {points: [0, 1, 2, 3], distance: 'shoulder_elbow_wrist_left'},
          {points: [4, 5, 6, 7, 8, 9, 10], distance: 'shoulder_to_midhand_left'},
          {points: [3, 4], distance: 'third_wrist'},
          {points: [1, 9], distance: 'half_shoulder'},
          {points: [0, 1], distance: 'across_back_shoulder_neck_base_shoulder'},
        ],
        angles: [],
      }
    },
  ],
}

const el = startApp({pattern})
document.body.appendChild(el)
