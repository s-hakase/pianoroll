<template>
  <g>
    <rect :x="x" :y="y" rx="2" ry="2" :width="width" height="20" />
    <text :x="x*1 + 2" :y="y*1 + 15" >{{keyname}}</text>
  </g>
</template>

<script>
export default {
  props: [ 'x', 'y', 'width', 'keyname' ]
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
