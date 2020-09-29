<template>
  <div class="app">
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import './styles/base';

* {
  box-sizing: border-box;
}

body {
  max-width: 100vw;
}
</style>
