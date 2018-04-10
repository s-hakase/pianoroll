<template>
  <div class="pianoroll">
    <svg :height="height" :width="width">
      <defs>
        <linearGradient id="WhiteKeyGradient">
          <stop offset="5%" stop-color="#dbe2e9" />
          <stop offset="90%" stop-color="#ffffff" />
        </linearGradient>
        <linearGradient id="BlackKeyGradient">
          <stop offset="5%" stop-color="#46484B" />
          <stop offset="90%" stop-color="#5b5d5f" />
        </linearGradient>
      </defs>
      <PianoRoll
        :height="height"
        :width="width - previewWidth"
        :offsetX="previewWidth"
        :octaves="octaves" />
      <Preview
        :height="height"
        :width="previewWidth"
        :octaves="octaves" />
    </svg>
  </div>
</template>

<script>
import PianoRoll from './PianoRoll';
import Preview from './Preview';

export default {
  name: 'PianoRollContainer',
  data () {
    return {
      height: 300,
      width: 300,
      previewWidth: 120,
      octaves: [{
        value: 6
      }, {
        value: 5
      }, {
        value: 4
      }]
    };
  },
  components: {
    PianoRoll,
    Preview
  },
  mounted () {
    this.width = document.documentElement.clientWidth;
    this.height = document.documentElement.clientHeight;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
