const Letter = require('./Letter');

class HamAndEggs {
  constructor(operator, words, total, rules) {
    this.op = operator;
    this.words = words;
    this.total = total;
    this.rules = rules || [];
    this.setup();
  }

  setup() {
    this.uniqueLetters = this.extractUniqueLetters();
    this.Symbols = {};
    this.uniqueLetters.forEach( letterString => {
      this.Symbols[letterString] = new Letter(letterString, this.rulesThatApply(letterString));
    });
    console.log('Hi Edward, Symbols:', this.Symbols);
  }

  rulesThatApply(letterString) {
    let foo = this.rules.filter( rule => rule[0] === letterString );
    console.log('Hi Edward, letter:', letterString, ', foo:', foo);
    return foo;
  }

  extractUniqueLetters() {
    let letters = [];
    [...this.words, this.total].forEach( str => {
      str.split('').forEach( letter => {
        if (! letters.includes(letter)) {
          letters.push(letter);
        }
      })
    });
    return letters.sort();
  }

  *solutions() {

  }
}

module.exports = HamAndEggs;
