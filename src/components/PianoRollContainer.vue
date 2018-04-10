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
      <Preview :height="height" :width="previewWidth" />
      <PianoRoll
        :height="height"
        :width="width - previewWidth"
        :offsetX="previewWidth"/>
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
      previewWidth: 120
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
