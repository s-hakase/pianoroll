import constant from '@/constants/constant';
let count = 0;

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
    setCurrentKeyAndOctave (keyname) {
      let length = keyname.length;
      if (length === 0) {
        KeyStore.data.currentKey = '';
        KeyStore.data.currentOctave = '';
        return;
      }
      KeyStore.data.currentKey = keyname.substring(0, length - 1);
      KeyStore.data.currentOctave = keyname.substring(length - 1, length);
    },
    setCurrentSnappedPosition (pos) {
      KeyStore.data.currentSnappedPosition = [
        pos[0] - (pos[0] % (KeyStore.data.selectedSnap * constant.X_AXIS_INTERVAL)),
        pos[1] - (pos[1] % constant.LINE_HEIGHT)
      ];
    },
    addNote (note) {
      note.id = 'note-' + count;
      KeyStore.data.notes.push(note);
      count++;
    },
    selectNoteByIds (ids) {
      KeyStore.data.notes.forEach((note) => {
        let index = ids.findIndex((id) => {
          return note.id === id;
        });
        note.selected = index > -1;
      });
    }
  }
};

export default KeyStore;
