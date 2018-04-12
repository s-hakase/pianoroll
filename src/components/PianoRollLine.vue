<template>
  <g>
    <rect :class="classname"
      :width="width" :height="constant.LINE_HEIGHT"
      :x="x" :y="y"
      @mouseover="setCurrentKey(keyname)"
      @mouseout="setCurrentKey('')" />
    <line
      :x1="x" :x2="x + width"
      :y1="lineY" :y2="lineY" />
  </g>
</template>

<script>
import constant from '@/constants/constant';
import KeyStore from '@/stores/KeyStore';

export default {
  data () {
    return {
      constant
    };
  },
  props: ['width', 'x', 'y', 'classname', 'keyname'],
  computed: {
    lineY () {
      return this.y + this.constant.LINE_HEIGHT;
    }
  },
  methods: {
    setCurrentKey (keyname) {
      KeyStore.methods.setCurrentKey(keyname);
    }
  }
};
</script>

<style scoped>
rect:hover {
  fill: #416677;
}
.white {
  opacity: 0;
}
.white:hover {
  opacity: 1;
}
.black {
  fill: #2E4C58;
}
line {
  stroke: #2D4B57;
  stroke-width: 1px;
  pointer-events: none;
}
</style>
