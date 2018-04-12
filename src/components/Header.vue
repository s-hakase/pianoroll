<template>
  <div id="Header">
    <header class="header">
      <!-- Contents -->
      <span>{{KeyStore.currentKey}}{{KeyStore.currentOctave}}</span>
    </header>
  </div>
</template>

<script>
import KeyStore from '@/stores/KeyStore';

export default {
  data () {
    return {
      KeyStore: KeyStore.data
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
