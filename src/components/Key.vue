<template>
  <g>
    <rect :class="classname" :width="computedWidth" :y="y" :height="height"/>
    <line v-if="classname === 'white'"
      x1="0" :x2="width"
      :y1="y + height" :y2="y + height"/>
  </g>
</template>

<script>
export default {
  data () {
    return {
      height: 30,
      computedWidth: this.width
    };
  },
  props: ['classname', 'width', 'y'],
  mounted () {
    this.computedWidth = this.width;
    if (this.classname === 'black') {
      this.height = 20;
      this.computedWidth *= 0.7;
    }
  }
};
</script>

<style scoped>
.white {
  fill: url(#WhiteKeyGradient);
}

.black {
  fill: url(#BlackKeyGradient);
}

line {
  stroke-width: 1px;
  stroke: #CBCED2;
}
</style>
