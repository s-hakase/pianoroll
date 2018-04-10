<template>
  <g>
    <rect :class="classname"
      :width="width" height="20" y="y" />
    <line
      x1="0" :x2="width"
      :y1="y + 20" :y2="y + 20" />
  </g>
</template>

<script>
export default {
  props: ['width', 'y', 'classname'],
}
</script>
