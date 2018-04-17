const WHITE_KEYS_HEIGHT = [
  30, 40, 40, 30, 30, 40, 30
];
const Constant = {
  KEY_NAMES: ['B', 'A#', 'A', 'G#', 'G', 'F#', 'F', 'E', 'D#', 'D', 'C#', 'C'],
  KEY_NAMES_ONLY_WHITE: ['B', 'A', 'G', 'F', 'E', 'D', 'C'],
  OCTAVE_KEYS: [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
  WHITE_KEYS_HEIGHT,
  WHITE_KEYS_Y:
    WHITE_KEYS_HEIGHT.map((value, index, array) => {
      return array.reduce((prev, current, i) => {
        return i < index ? prev + current : prev;
      }, 0);
    }),
  OCTAVE_HEIGHT: WHITE_KEYS_HEIGHT.reduce((prev, current) => {
    return prev + current;
  }, 0),
  BLACK_KEY_HEIGHT: 20,
  LINE_HEIGHT: 20,
  X_AXIS_INTERVAL: 16,
  X_AXIS_OFFSET: 8,
  SELECTS_SNAP: [
    { label: '1/4 Step', value: 0.25 }, // 64th notes
    { label: '1/2 Step', value: 0.5 }, // 32nd notes
    { label: '1/4 Beat', value: 1 }, // 16th notes
    { label: '1/2 Beat', value: 2 }, // 8th notes
    { label: '1 Beat', value: 4, default: 'true' } // Quarter notes
  ]
};

export default Constant;
