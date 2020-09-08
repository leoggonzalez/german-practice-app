<template>
  <div class="words">
    <h1>Words</h1>
    <router-link to="words/new">create word</router-link>
    <table style="width:100%">
      <tr>
        <th>Name</th>
        <th>Name (English)</th>
        <th>Gender</th>
        <th>Word Type</th>
        <th>Definition</th>
      </tr>
      <tr v-for="item in words" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.name_en }}</td>
        <td>{{ item.gender }}</td>
        <td>{{ item.word_type }}</td>
        <td>{{ item.definition }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Words',
  mounted() {
    this.$store.dispatch('loadWords');
  },
  computed: mapState(['words']),
});
</script>
