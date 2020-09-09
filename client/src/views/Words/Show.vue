<template>
  <div>
    <div v-if="loading">Loading</div>
    <div v-else-if="!word">Can't find word</div>
    <div v-else>
      <h1>{{ word.name }}</h1>
      <ul>
        <li>
          <strong>Name:</strong>
          {{ word.name }}
        </li>
        <li>
          <strong>Name (english):</strong>
          {{ word.name_en }}
        </li>
        <li>
          <strong>Gender:</strong>
          {{ word.gender }}
        </li>
        <li>
          <strong>Type:</strong>
          {{ word.wordType }}
        </li>
        <li>
          <strong>Definition:</strong>
          {{ word.definition }}
        </li>
      </ul>
    </div>
    <router-link to="/words" tag="button">Go back</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Word',
  data: () => ({
    loading: false,
  }),
  mounted() {
    this.loadWord();
  },
  methods: {
    async loadWord(): Promise<void> {
      this.loading = true;
      await this.$store.dispatch('loadWord', this.$route.params.id);
      this.loading = false;
    },
  },
  computed: {
    word(): Word {
      return this.$store.getters.getTodoById(2);
    },
  },
});
</script>
