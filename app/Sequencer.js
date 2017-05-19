const LetterValue = require('./LetterValue');

class Sequencer {
  constructor(symbols) {
    this.symbols = symbols;
    this.setup();
  }

  setup() {
    this.letterValues = Object.keys(this.symbols).map( letter => {
      return new LetterValue(letter, this.symbols[letter].numberList);
    });

    // Place the sequences in order based on how many numbers there are
    this.letterValues.sort( (a,b) => {
      return a.baseNumbersCount - b.baseNumbersCount;
    });

    this.index = 0;
    this.taken = {};
  }

  *sequences() {
    let letter = this.letterValues[this.index];

    if (! letter.running) {
      letter.running = true;
      letter.idx = 0;
    }
  }
}

module.exports = Sequencer;