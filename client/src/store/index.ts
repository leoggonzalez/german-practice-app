import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words: [],
  },
  mutations: {
    SET_WORDS(state, words) {
      state.words = words;
    },
  },
  actions: {
    async loadWords({ commit }) {
      const resp = await axios.get('http://localhost:3000/api/v1/words');
      commit('SET_WORDS', resp.data);
    },
    async createWord({ commit }, data) {
      try {
        const resp = await axios.post('http://localhost:3000/api/v1/words', {
          ...data,
          // eslint-disable-next-line
          word_type: data.wordType,
          // eslint-disable-next-line
          name_en: data.nameEn,
        });
        commit('ADD_WORD', resp.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
