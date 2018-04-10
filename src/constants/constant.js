const WHITE_KEYS_HEIGHT = [
  30, 40, 40, 30, 30, 40, 30
];
const Constant = {
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
  LINE_HEIGHT: 20
};

export default Constant;
