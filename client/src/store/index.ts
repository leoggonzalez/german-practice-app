import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words: Array<Word>(),
  },
  mutations: {
    SET_WORDS(state, words: Word[]) {
      state.words = words;
    },
    ADD_WORD(state, word: Word) {
      state.words.push(word);
    },
  },
  actions: {
    async loadWords({ commit }) {
      try {
        const resp = await axios.get<WordApi[]>('http://localhost:3000/api/v1/words');
        commit(
          'SET_WORDS',
          resp.data.map(item => ({
            ...item,
            wordType: item.word_type,
            nameEn: item.name_en,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    },
    async loadWord({ commit }, id: string) {
      try {
        const resp = await axios.get<WordApi>(`http://localhost:3000/api/v1/words/${id}`);
        commit('ADD_WORD', {
          ...resp.data,
          wordType: resp.data.word_type,
          nameEn: resp.data.name_en,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async createWord({ commit }, data: Word): Promise<void> {
      try {
        const resp = await axios.post<WordApi>('http://localhost:3000/api/v1/words', {
          ...data,
          // eslint-disable-next-line
          word_type: data.wordType,
          // eslint-disable-next-line
          name_en: data.nameEn,
        });
        commit('ADD_WORD', {
          ...resp.data,
          wordType: resp.data.word_type,
          nameEn: resp.data.name_en,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getTodoById: state => (id: string) => {
      return state.words.find(item => item.id === id);
    },
  },
  modules: {},
});
