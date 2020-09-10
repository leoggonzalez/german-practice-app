type WordType = 'noun' | 'verb' | 'adjective';
type WordGender = 'feminine' | 'masculine' | 'neutral';

interface WordBase {
  name: string;
  nameEn: string;
  wordType: WordType;
  gender: WordGender;
}

export interface Word extends WordBase {
  id: string;
  nameEn: string;
  wordType: WordType;
}

export interface WordApi extends WordBase {
  id: number;
  name_en: string;
  word_type: WordType;
}
