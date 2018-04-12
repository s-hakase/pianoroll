const KeyStore = {
  data: {
    currentKey: '',
    currentOctave: ''
  },
  methods: {
    setCurrentKey (keyname) {
      KeyStore.data.currentKey = keyname;
    },
    setCurrentOctave (octave) {
      KeyStore.data.currentOctave = octave;
    }
  }
};

export default KeyStore;
