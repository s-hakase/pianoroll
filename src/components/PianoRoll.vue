<template>
  <g>
    <rect :height="height" :width="width" :x="offsetX" />
    <g v-for="(octave, octaveIndex) in octaves" :key="octaveIndex"
      @mouseover="setCurrentOctave(octave.value)"
      @mouseout="updateMouseStatus($event);setCurrentOctave('');play($event)"
      @mousedown="updateMouseStatus($event);play($event)"
      @mouseup="addNote();updateMouseStatus($event);play($event)"
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
    <Note v-for="note in KeyStore.notes" :key="note.id"
      :x="note.x" :y="note.y" :width="note.width" :keyname="note.keyname"
      :selected="note.selected" :id="note.id" />
    <Note v-if="KeyStore.clicked === 1" class="pointer-none"
      :x="KeyStore.currentSnappedPosition[0]"
      :y="KeyStore.currentSnappedPosition[1]"
      :width="KeyStore.selectedSnap * constant.X_AXIS_INTERVAL"
      :keyname="KeyStore.currentKey + KeyStore.currentOctave"
      :selected="false" />
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
      KeyStore: KeyStore.data
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
      if (!Pico || !Sionic) {
        return;
      }
      if (!e || e.buttons !== 1 || e.type === 'mouseout' ||
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
    updateMouseStatus (e) {
      KeyStore.data.clicked = e.buttons;
      e.preventDefault();
    },
    addNote () {
      if (KeyStore.data.clicked === 1) {
        KeyStore.methods.addNote({
          x: KeyStore.data.currentSnappedPosition[0],
          y: KeyStore.data.currentSnappedPosition[1],
          width: KeyStore.data.selectedSnap * constant.X_AXIS_INTERVAL,
          keyname: KeyStore.data.currentKey + KeyStore.data.currentOctave,
          selected: false
        });
      }
    }
  }
};
</script>

<style scoped>
rect {
  fill: #36535F;
}
.pointer-none {
  pointer-events: none;
}
</style>
