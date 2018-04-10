<template>
  <g>
    <rect :height="height" :width="width" />
    <g v-for="octave in octaves" :key="octave">
      <g class="white-keys">
        <Key v-for="key in whiteKeys" :key="key"
          classname="white" :width="width" :y="key * 30 + octave * octaveHeight" />
      </g>
      <g class="black-keys">
        <Key v-for="key in blackKeys" :key="key"
          v-if="key % 7 !== 3 && key % 7 !== 6"
          classname="black" :width="width" :y="key * 30 + 20 + octave * octaveHeight" />
      </g>
    </g>
  </g>
</template>

<script>
import Key from './Key';

export default {
  data () {
    return {
      octaves: [0, 1, 2],
      whiteKeys: [0, 1, 2, 3, 4, 5, 6],
      blackKeys: [0, 1, 2, 3, 4, 5, 6]
    };
  },
  props: ['height', 'width'],
  components: {
    Key
  },
  computed: {
    octaveHeight () {
      return 30 * 7;
    }
  }
};
</script>

<style scoped>
rect {
  fill: #dbe2e9;
}
</style>
