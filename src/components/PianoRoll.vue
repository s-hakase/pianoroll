<template>
  <rect :height="height" :width="width" :x="offsetX" />
</template>

<script>
export default {
  props: ['height', 'width', 'offsetX']
};
</script>

<style scoped>
rect {
  fill: #36535F;
}
</style>
