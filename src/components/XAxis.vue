<template>
  <g class="xaxis">
    <line v-for="(axis, index) in axes" :key="axis"
      :class="index | getClass"
      :x1="axis + x" :x2="axis + x"
      y1="0" :y2="height"/>
  </g>
</template>

<script>
import constant from '@/constants/constant';

export default {
  props: ['width', 'height', 'x'],
  data () {
    return {
      axes: []
    };
  },
  filters: {
    getClass (index) {
      if (index % 16 === 0) {
        return 'measure';
      }
      if (index % 4 === 0) {
        return 'beat';
      }
      return '';
    }
  },
  watch: {
    width (val) {
      this.axes = (() => {
        let axes = [];
        for (let x = 12; x < val; x += constant.X_AXIS_INTERVAL) {
          axes.push(x);
        }
        return axes;
      })();
    }
  }
};
</script>

<style scoped>
line {
  stroke: #2D4B57;
  stroke-width: 1px;
  opacity: 0.5;
}
.measure {
  stroke: #23424E;
  stroke-width: 2px;
  opacity: 1;
}
.beat {
  opacity: 1;
}
</style>
