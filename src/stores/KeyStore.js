import constant from '@/constants/constant';

const KeyStore = {
  data: {
    currentKey: '',
    currentOctave: '',
    currentSnappedPosition: [-9999, -9999],
    selectedSnap: 4,
    notes: []
  },
  methods: {
    setCurrentKey (keyname) {
      KeyStore.data.currentKey = keyname;
    },
    setCurrentOctave (octave) {
      KeyStore.data.currentOctave = octave;
    },
    setCurrentSnappedPosition (pos) {
      KeyStore.data.currentSnappedPosition = [
        pos[0] - (pos[0] % (KeyStore.data.selectedSnap * constant.X_AXIS_INTERVAL)),
        pos[1] - (pos[1] % constant.LINE_HEIGHT)
      ];
    },
    addNote (note) {
      KeyStore.data.notes.push(note);
    }
  }
};

export default KeyStore;
