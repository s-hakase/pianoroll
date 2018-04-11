<template>
  <g>
    <rect :height="height" :width="width" :x="offsetX" />
    <g v-for="(octave, octaveIndex) in octaves" :key="octaveIndex">
      <PianoRollLine v-for="(key, index) in constant.OCTAVE_KEYS"
        :key="`${octaveIndex}-${index}`"
        :classname="key === 0 ? 'white' : 'black'"
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
  }
};
</script>

<style scoped>
rect {
  fill: #36535F;
}
</style>
