<template>
  <div class="page container">
    <div v-if="loading">Loading</div>
    <div v-else-if="!word">Can't find word</div>
    <div v-else class="stack">
      <h1>{{ word.name }}</h1>
      <ul class="stack stack--xs">
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
      <div>
        <router-link to="/words" tag="button">Go back</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Word } from '@/model/word';
import Vue from 'vue';

export default Vue.extend({
  name: 'Word',
  mounted() {
    this.loadWord();
  },
  methods: {
    loadWord(): void {
      this.$store.dispatch('loadWord', this.$route.params.id);
    },
  },
  computed: {
    loading(): boolean {
      return this.$store.state.loading.word;
    },
    word(): Word {
      return this.$store.getters.getWordById(this.$route.params.id);
    },
  },
});
</script>
