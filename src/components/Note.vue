<template>
  <g :class="{selected:selected}">
    <rect :x="x" :y="y" rx="2" ry="2" :width="width" height="20"
      @mouseover="setCurrentKeyAndOctave(keyname)"
      @mouseout="setCurrentKeyAndOctave('')"
      @click="select"/>
    <text :x="textX" :y="textY" >{{keyname}}</text>
  </g>
</template>

<script>
import KeyStore from '@/stores/KeyStore';

export default {
  props: [ 'x', 'y', 'width', 'keyname', 'selected', 'id' ],
  computed: {
    textX () {
      return this.x + 2;
    },
    textY () {
      return this.y + 15;
    }
  },
  methods: {
    setCurrentKeyAndOctave (keyname) {
      KeyStore.methods.setCurrentKeyAndOctave(keyname);
    },
    select () {
      KeyStore.methods.selectNoteByIds([this.id]);
    }
  }
};
</script>

<style scoped>
rect {
  fill: #A2F1C6;
  stroke: #3D6360;
  stroke-width: 1px;
}
rect:hover {
  fill: #B2FFD6;
}
.selected rect {
  fill: #FFA8A8;
  stroke: #BB5963;
}
text {
  fill: #37B18D;
  font-size: 14px;
  font-weight: bold;
  pointer-events: none;
}
.selected text {
  fill: #BB5963;
}
</style>
