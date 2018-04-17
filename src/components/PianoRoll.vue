<template>
  <g>
    <rect :height="height" :width="width" :x="offsetX" />
    <g v-for="(octave, octaveIndex) in octaves" :key="octaveIndex"
      @mouseover="setCurrentOctave(octave.value)"
      @mouseout="setCurrentOctave('');play($event)"
      @mousedown="play"
      @mouseup="play($event);addNote()"
      @mousemove="play($event);updateMousePositionAtPianoRoll($event)">
      <PianoRollLine v-for="(key, index) in constant.OCTAVE_KEYS"
        :key="`${octaveIndex}-${index}`"
        :classname="key === 0 ? 'white' : 'black'"
        :keyname="constant.KEY_NAMES[index]"
        :width="width" :height="constant.LINE_HEIGHT"
        :x="offsetX"
        :y="index * constant.LINE_HEIGHT + octaveIndex * octaveHeight"/>
    </g>
    <XAxis :height="height" :width="width" :x="offsetX" />
    <Note v-for="note in KeyStore.notes" :key="note.num"
      :x="note.x" :y="note.y" :width="note.width" :keyname="note.keyname" />
    <Note v-if="clicked === 1"
      :x="KeyStore.currentSnappedPosition[0]"
      :y="KeyStore.currentSnappedPosition[1]"
      :width="KeyStore.selectedSnap * constant.X_AXIS_INTERVAL"
      :keyname="KeyStore.currentKey + KeyStore.currentOctave" />
  </g>
</template>

<script>
import PianoRollLine from './PianoRollLine';
import XAxis from './XAxis';
import Note from './Note';
import constant from '@/constants/constant';
import KeyStore from '@/stores/KeyStore';

Pico.pause();
let latestKey = '';

export default {
  props: ['height', 'width', 'offsetX', 'octaves'],
  data () {
    return {
      constant,
      KeyStore: KeyStore.data,
      clicked: 0
    };
  },
  components: {
    PianoRollLine,
    XAxis,
    Note
  },
  computed: {
    octaveHeight () {
      return constant.LINE_HEIGHT * 12;
    }
  },
  methods: {
    setCurrentOctave (octave) {
      KeyStore.methods.setCurrentOctave(octave);
    },
    play (e) {
      this.clicked = e.buttons;
      if (!Pico || !Sionic) {
        return;
      }
      if (!e || e.buttons === 0 || e.type === 'mouseout' ||
        !KeyStore.data.currentOctave || !KeyStore.data.currentKey) {
        this.pause();
        return;
      }
      let key = KeyStore.data.currentKey.toLowerCase();
      let octave = KeyStore.data.currentOctave;
      let mml = `t1;o${octave}${key.split('#').join('+')}`;
      if (latestKey === mml) {
        return;
      }
      this.pause();
      Pico.play(Sionic(mml));
      latestKey = mml;
    },
    pause () {
      Pico.pause();
      latestKey = '';
    },
    updateMousePositionAtPianoRoll (e) {
      let x = e.offsetX;
      let y = e.offsetY;
      KeyStore.methods.setCurrentSnappedPosition([x, y]);
    },
    addNote () {
      KeyStore.methods.addNote({
        num: Math.random(),
        x: KeyStore.data.currentSnappedPosition[0],
        y: KeyStore.data.currentSnappedPosition[1],
        width: KeyStore.data.selectedSnap * constant.X_AXIS_INTERVAL,
        keyname: KeyStore.data.currentKey + KeyStore.data.currentOctave
      });
    }
  }
};
</script>

<style scoped>
rect {
  fill: #36535F;
}
</style>
