<template>
  <g>
    <rect :class="classname"
      :width="width" :height="constant.LINE_HEIGHT" :x="x" :y="y" />
    <line
      :x1="x" :x2="x + width"
      :y1="lineY" :y2="lineY" />
  </g>
</template>

<script>
import constant from '@/constants/constant';

export default {
  data () {
    return {
      constant
    };
  },
  props: ['width', 'x', 'y', 'classname'],
  computed: {
    lineY () {
      return this.y + this.constant.LINE_HEIGHT;
    }
  }
};
</script>

<style scoped>
.white {
  opacity: 0;
}
.black {
  fill: #2E4C58;
}
line {
  stroke: #2D4B57;
  stroke-width: 1px;
}
</style>
