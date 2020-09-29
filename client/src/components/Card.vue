<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Card',
});
</script>

<style lang="scss">
.card {
  padding: 24px;
  box-shadow: 0px 1px 4px 2px rgba(black, 0.1);
}
</style>
