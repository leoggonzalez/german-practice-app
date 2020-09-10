import { ActionContext } from 'vuex';
import { Word } from '@/model/word';

export interface StateLoading {
  words: boolean;
  word: boolean;
}

export interface State {
  words: Word[];
  loading: StateLoading;
}

export type ActionParams = ActionContext<State, State>;
