<template>
  <div class="page container stack">
    <h1>Words</h1>
    <div>
      <router-link to="words/new" tag="button">create word</router-link>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="!words.length">There are no words</div>
    <table v-else style="width: 100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Name (English)</th>
          <th>Gender</th>
          <th>Word Type</th>
          <th>Definition</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in words" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.name_en }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.word_type }}</td>
          <td>{{ item.definition }}</td>
          <td>
            <router-link tag="button" :to="`/words/${item.id}`"
              >view</router-link
            >
            <router-link tag="button" :to="`/words/${item.id}/edit`"
              >edit</router-link
            >
            <button v-on:click="handleDelete(item.id)">delete</button>
          </td>
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
  computed: {
    loading() {
      return this.$store.state.loading.words;
    },
    ...mapState(['words']),
  },
  methods: {
    handleDelete(id: string): void {
      // eslint-disable-next-line
      const resp = confirm('Are you sure you want to delete this Word?');
      if (resp) {
        this.$store.dispatch('deleteWord', id);
      }
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
