import axios from 'axios';
import { ActionParams } from './types';
import { Word, WordApi } from '../model/word';

function mapParams(word: WordApi): Word {
  return {
    ...word,
    // TODO: Find a way to return a string from the api
    id: word.id.toString(),
    // TODO: Find out how to parse camelcase to snake case
    wordType: word.word_type,
    nameEn: word.name_en,
  };
}

export default {
  async loadWords({ commit }: ActionParams) {
    commit('SET_LOADING', 'words');
    try {
      const resp = await axios.get<WordApi[]>('http://localhost:3000/api/v1/words');
      commit('SET_WORDS', resp.data.map(mapParams));
    } catch (error) {
      console.log(error);
    }
    commit('UNSET_LOADING', 'words');
  },
  async loadWord({ commit }: ActionParams, id: string) {
    commit('SET_LOADING', 'word');
    try {
      const resp = await axios.get<WordApi>(`http://localhost:3000/api/v1/words/${id}`);
      commit('ADD_WORD', mapParams(resp.data));
    } catch (error) {
      console.log(error);
    }
    commit('UNSET_LOADING', 'word');
  },
  async createWord({ commit }: ActionParams, data: Word): Promise<void> {
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
};
