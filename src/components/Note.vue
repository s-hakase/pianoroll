<template>
  <g>
    <rect :x="x" :y="y" rx="2" ry="2" :width="width" height="20" />
    <text :x="textX" :y="textY" >{{keyname}}</text>
  </g>
</template>

<script>
export default {
  props: [ 'x', 'y', 'width', 'keyname' ],
  computed: {
    textX () {
      return this.x + 2;
    },
    textY () {
      return this.y + 15;
    }
  }
};
</script>

<style scoped>
rect {
  fill: #A2F1C6;
  stroke: #3D6360;
  stroke-width: 1px;
  pointer-events: none;
}
text {
  fill: #37B18D;
  font-size: 14px;
  font-weight: bold;
  pointer-events: none;
}
</style>
