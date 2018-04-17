<template>
  <div id="Header">
    <header class="header">
      <!-- Contents -->
      <select name="snap" v-model="KeyStore.selectedSnap">
        <option v-for="opt in constant.SELECTS_SNAP" :key="opt.value"
          :value="opt.value" :selected="!!opt.default">{{opt.label}}</option>
      </select>
      <span>{{KeyStore.currentKey}}{{KeyStore.currentOctave}}</span>
    </header>
  </div>
</template>

<script>
import KeyStore from '@/stores/KeyStore';
import constant from '@/constants/constant';

export default {
  data () {
    return {
      KeyStore: KeyStore.data,
      constant: constant
    };
  }
};
</script>

<style>
#Header {
  position: fixed;
  background: #1E343D;
  top: 0;
  width: 100%;

  /* temp */
  height: 56px;
}
.header {
  color: #EFF7FB;
}
</style>
