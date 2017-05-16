class Sequencer {
  constructor(symbols) {
    this.symbols = symbols;
    this.setup();
  }

  setup() {
    this.sequences = Object.keys(this.symbols).map( letter => {
      return {
        letter: letter,
        baseNumbers: this.symbols[letter].numberList,
        running: false
      };
    });

    // Place the sequences in order based on how many numbers there are
    this.sequences.sort( (a,b) => {
      return a.baseNumbers.length - b.baseNumbers.length;
    });

    this.index = 0;
    this.taken = {};
  }

  *sequences() {
    let thisSequence = this.sequences[this.index];

    if (! thisSequence.running) {
      thisSequence.running = true;
      thisSequence.idx = 0;
    }

  }
}

module.exports = Sequencer;