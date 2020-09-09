<template>
  <div class="words">
    <h1>Words</h1>
    <router-link to="words/new" tag="button">create word</router-link>
    <table style="width:100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Name (English)</th>
          <th>Gender</th>
          <th>Word Type</th>
          <th>Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in words" :key="item.id" v-on:click="openWord(item.id)">
          <td>{{ item.name }}</td>
          <td>{{ item.name_en }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.word_type }}</td>
          <td>{{ item.definition }}</td>
        </tr>
      </tbody>
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
  methods: {
    openWord(id: string): void {
      this.$router.push(`/words/${id}`);
    },
  },
});
</script>

<style lang="scss">
tbody {
  tr {
    cursor: pointer;
    &:hover {
      background-color: lightblue;
    }
  }
}
</style>
