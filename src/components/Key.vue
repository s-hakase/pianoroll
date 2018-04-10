<template>
  <g>
    <rect :class="classname" :width="computedWidth"
      :y="y" :height="height"/>
    <line v-if="classname === 'white'"
      x1="0" :x2="width"
      :y1="y + height" :y2="y + height"/>
  </g>
</template>

<script>
export default {
  data () {
    return {
      computedWidth: this.width
    };
  },
  props: ['classname', 'width', 'height', 'y'],
  mounted () {
    this.computedWidth = this.width;
    if (this.classname === 'black') {
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
