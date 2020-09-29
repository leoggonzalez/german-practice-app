<template>
  <div class="page container stack">
    <h1>Create Word</h1>

    <Card>
      <form v-on:submit.prevent="onSubmit">
        <div class="form-group">
          <label for="name">name</label>
          <input required id="name" type="text" v-model="form.name" />
        </div>
        <div class="form-group">
          <label for="name">name english</label>
          <input required id="name" type="text" v-model="form.nameEn" />
        </div>
        <div class="form-group form-group--inline">
          <div class="radio" v-for="item in fields.wordType" :key="item">
            <input
              type="radio"
              :id="item"
              :value="item"
              v-model="form.wordType"
            />
            <label :for="item">{{ item }}</label>
          </div>
        </div>
        <div class="form-group form-group--inline">
          <div class="radio" v-for="item in fields.gender" :key="item">
            <input
              type="radio"
              :id="item"
              :value="item"
              v-model="form.gender"
            />
            <label :for="item">{{ item }}</label>
          </div>
        </div>
        <div class="form-group">
          <label for="definition">Definition</label>
          <textarea
            name="definition"
            id="definition"
            rows="5"
            v-model="form.definition"
          ></textarea>
        </div>
        <footer class="form-footer">
          <router-link to="/words" tag="button">back</router-link>
          <button>Submit</button>
        </footer>
      </form>
    </Card>
  </div>
</template>

<script lang="ts">
import { Word } from '@/model/word';
import Card from '@/components/Card.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'New',
  components: {
    Card,
  },
  data: () => ({
    fields: {
      gender: ['masculine', 'feminine', 'neutral'],
      // TODO: connect adverb to database
      wordType: ['noun', 'adjective', 'verb', 'adverb'],
    },
    form: {
      name: '',
      nameEn: '',
      wordType: 'noun',
      gender: 'masculine',
      definition: '',
    },
  }),
  methods: {
    onSubmit() {
      if (this.word) {
        this.$store.dispatch('editWord', this.form);
      } else {
        this.$store.dispatch('createWord', this.form);
      }
    },
    async loadWord(): Promise<void> {
      if (this.$route.params.id) {
        await this.$store.dispatch('loadWord', this.$route.params.id);
      }
    },
  },
  mounted() {
    this.loadWord();
  },
  computed: {
    loading(): boolean {
      return this.$store.state.loading.word;
    },
    word(): Word {
      return this.$store.getters.getWordById(this.$route.params.id);
    },
  },
  watch: {
    word(val) {
      if (val) {
        this.form = val;
      }
    },
  },
});
</script>

<style lang="scss">
.form-group {
  margin-bottom: 16px;
  &--inline {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
