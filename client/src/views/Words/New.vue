<template>
  <div class="words">
    <h1>Create Word</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name">name</label>
        <input required id="name" type="text" v-model="form.name" />
      </div>
      <div class="form-group">
        <label for="name">name english</label>
        <input required id="name" type="text" v-model="form.nameEn" />
      </div>
      <div class="form-group">
        <input type="radio" id="type-noun" value="noun" v-model="form.wordType" />
        <label for="type-noun">Noun</label>
        <input type="radio" id="type-adj" value="adj" v-model="form.wordType" />
        <label for="type-adj">Adjective</label>
        <input type="radio" id="type-verb" value="verb" v-model="form.wordType" />
        <label for="type-verb">Verb</label>
      </div>
      <div class="form-group">
        <input type="radio" id="type-masc" value="masc" v-model="form.gender" />
        <label for="type-masc">Masculine</label>
        <input type="radio" id="type-fem" value="fem" v-model="form.gender" />
        <label for="type-fem">Feminine</label>
        <input type="radio" id="type-neutral" value="neutral" v-model="form.gender" />
        <label for="type-neutral">Neutral</label>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea name="definition" id="definition" rows="5" v-model="form.definition"></textarea>
      </div>
      <footer class="form-footer">
        <button>Submit</button>
      </footer>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'New',
  data: () => ({
    form: {
      name: '',
      nameEn: '',
      wordType: 'noun',
      gender: 'masc',
      definition: '',
    },
  }),
  methods: {
    onSubmit() {
      this.$store.dispatch('createWord', this.form);
    },
  },
});
</script>
