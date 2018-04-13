<template>
  <g>
    <rect :height="height" :width="width" :x="offsetX" />
    <g v-for="(octave, octaveIndex) in octaves" :key="octaveIndex"
      @mouseover="setCurrentOctave(octave.value)"
      @mouseout="setCurrentOctave('');play()"
      @mousedown="play"
      @mouseup="play"
      @mousemove="play">
      <PianoRollLine v-for="(key, index) in constant.OCTAVE_KEYS"
        :key="`${octaveIndex}-${index}`"
        :classname="key === 0 ? 'white' : 'black'"
        :keyname="constant.KEY_NAMES[index]"
        :width="width" :height="constant.LINE_HEIGHT"
        :x="offsetX"
        :y="index * constant.LINE_HEIGHT + octaveIndex * octaveHeight"/>
    </g>
    <XAxis :height="height" :width="width" :x="offsetX" />
  </g>
</template>

<script>
import PianoRollLine from './PianoRollLine';
import XAxis from './XAxis';
import constant from '@/constants/constant';
import KeyStore from '@/stores/KeyStore';

Pico.pause();
let latestKey = '';

export default {
  props: ['height', 'width', 'offsetX', 'octaves'],
  data () {
    return {
      constant
    };
  },
  components: {
    PianoRollLine,
    XAxis
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
      e && console.info(e.buttons);
      if (!e || e.buttons === 0 ||
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
    }
  }
};
</script>

<style scoped>
rect {
  fill: #36535F;
}
</style>
