<template>
  <g>
    <rect :height="height" :width="width" />
    <g v-for="(octave, octaveIndex) in octaves" :key="'white-' + octave.value">
      <g class="white-keys">
        <Key v-for="key in keys" :key="key.y"
          classname="white" :width="width" :height="key.height"
          :y="key.y + octaveIndex * constant.OCTAVE_HEIGHT" />
      </g>
    </g>
    <g v-for="(octave, octaveIndex) in octaves" :key="'black-' + octave.value">
      <g class="black-keys">
        <Key v-for="(key, index) in keys" :key="key.y"
          v-if="index % 7 !== 3 && index % 7 !== 6"
          classname="black" :width="width" :height="constant.BLACK_KEY_HEIGHT"
          :y="key.y + key.height - 10 + octaveIndex * constant.OCTAVE_HEIGHT" />
      </g>
    </g>
  </g>
</template>

<script>
import Key from './Key';
import constant from '@/constants/constant';

export default {
  data () {
    return {
      keys: [],
      constant
    };
  },
  props: ['height', 'width', 'octaves'],
  components: {
    Key
  },
  mounted () {
    this.keys = constant.WHITE_KEYS_HEIGHT
      .map((value, index) => {
        return {
          height: value,
          y: constant.WHITE_KEYS_Y[index]
        };
      });
  }
};
</script>

<style scoped>
rect {
  fill: #dbe2e9;
}
</style>
