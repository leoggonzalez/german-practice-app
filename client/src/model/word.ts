type WordType = 'noun' | 'verb' | 'adjective';
type WordGender = 'feminine' | 'masculine' | 'neutral';

interface WordBase {
  id: string;
  name: string;
  nameEn: string;
  wordType: WordType;
  gender: WordGender;
}

interface Word extends WordBase {
  nameEn: string;
  wordType: WordType;
}

interface WordApi extends WordBase {
  name_en: string;
  word_type: WordType;
}
