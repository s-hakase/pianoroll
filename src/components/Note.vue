<template>
  <g :class="{selected:selected, dragging:KeyStore.dragging}"
    @mouseover="setCurrentKeyAndOctave(keyname)"
    @mouseout="setCurrentKeyAndOctave('');updateMouseStatus($event)"
    @mousemove="updateMousePositionAtPianoRoll($event);remove($event)"
    @mousedown="updateMouseStatus($event);remove($event)"
    @mouseup="updateMouseStatus($event)"
    @click="select">
    <rect class="note" :x="x" :y="y" rx="2" ry="2" :width="rectWidth" height="20" />
    <text :x="textX" :y="textY" >{{keyname}}</text>
    <rect v-if="editable"
      class="side" :x="x + rectWidth - areaWidth" :y="y"
      height="20" :width="areaWidth" @mousedown="startDrag" />
  </g>
</template>

<script>
import KeyStore from '@/stores/KeyStore';
import constant from '@/constants/constant';

const areaWidth = 12;

export default {
  props: [ 'x', 'y', 'width', 'keyname', 'selected', 'id', 'editable' ],
  data () {
    return {
      rectWidth: this.width * constant.X_AXIS_INTERVAL,
      areaWidth,
      KeyStore: KeyStore.data
    };
  },
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
    },
    remove (e) {
      if (KeyStore.data.clicked === 2) {
        KeyStore.methods.removeNote([this.id]);
      }
    },
    updateMouseStatus (e) {
      KeyStore.data.clicked = e.buttons;
    },
    updateMousePositionAtPianoRoll (e) {
      let x = e.offsetX;
      let y = e.offsetY;
      KeyStore.methods.setCurrentSnappedPosition([x, y]);
    },
    startDrag (e) {
      this.$emit('dragstart', this.id);
      e.stopPropagation();
    }
  },
  watch: {
    width (val) {
      this.rectWidth = val * constant.X_AXIS_INTERVAL;
    }
  }
};
</script>

<style scoped>
.note {
  fill: #A2F1C6;
  stroke: #3D6360;
  stroke-width: 1px;
}
.note:hover {
  fill: #B2FFD6;
}
.selected .note {
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
.side {
  fill: transparent;
  cursor: e-resize;
}
.dragging {
  pointer-events: none;
}
</style>
