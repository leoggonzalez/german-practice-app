import Vue from 'vue';
import Vuex from 'vuex';
import { Word } from '@/model/word';
import actions from './actions';
import { State, StateLoading } from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words: [],
    loading: {
      words: false,
      word: false,
    },
  } as State,
  mutations: {
    SET_WORDS(state, words: Word[]) {
      state.words = words;
    },
    ADD_WORD(state, word: Word) {
      state.words.push(word);
    },
    SET_LOADING<K extends keyof StateLoading>(state: State, property: K) {
      state.loading[property] = true;
    },
    UNSET_LOADING<K extends keyof StateLoading>(state: State, property: K) {
      state.loading[property] = false;
    },
  },
  actions,
  getters: {
    getWordById: state => (id: string) => {
      return state.words.find(item => {
        return item.id === id;
      });
    },
  },
  modules: {},
});
