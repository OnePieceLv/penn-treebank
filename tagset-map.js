//a (opinionated, reductive) mapping of penn-tagset to the compromise tagset
module.exports = {
  CC: 'Conjunction',
  CD: 'Value',
  DT: 'Determiner',
  FW: 'Expression',
  IN: 'Preposition',
  JJ: 'Adjective',
  JJR: 'Comparative',
  JJS: 'Superlative',
  MD: 'Verb',
  NN: 'Noun',
  NNS: 'Noun',
  NNP: 'Noun',
  NNPS: 'Noun',
  POS: 'Possessive',
  PRP: 'Pronoun',
  PRP$: 'Pronoun',
  RB: 'Adverb',
  RBR: 'Adverb',
  RBS: 'Superlative',
  TO: 'Conjunction',
  UH: 'Expression',
  VB: 'Verb',
  VBD: 'Verb',
  VBG: 'Verb',
  VBN: 'Verb', // past participle
  VBP: 'Verb', // non-3rd person singular present
  VBZ: 'Verb', // 3rd person singular present
  WDT: 'Determiner',
  WP: 'Pronoun',
  WP$: 'Noun',
  WRB: 'Adverb',
  LS: 'Value',
  EX: 'Expression',
  RP: 'Preposition',
  PDT: 'Adjective',
  //these seem like weird encodings for something
  '-LRB-': 'Noun',
  '-RRB-': 'Noun',
  ':': '',
}
