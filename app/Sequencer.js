const LetterValue = require('./LetterValue');

class Sequencer {
  constructor(symbols) {
    this.symbols = symbols;
    this.index = 0;
    this.taken = [];
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
  }

  makePretty() {
    let pretty = {};
    for (let x=0; x < this.letterValues.length; x++) {
      pretty[this.letterValues[x].letter] = this.taken[x];
    }
    return pretty;
  }


  *sequences() {
    while (true) {
      // We've run out of sequences, so break out of while loop
      if (this.index < 0) {
        break;

      // We've set all the possible numbers, lets try/yield this sequence
      } else if (this.index === this.letterValues.length) {
        yield this.makePretty();
        this.index--;

      } else {
        let letter = this.letterValues[this.index];

        // If we've not set this taken value yet, then set it up
        if (typeof this.taken[this.index] === 'undefined') {
          letter.reset();
          letter.removeTaken(this.taken);
        }

        // Try the next number for this letter, if we have numbers left
        if (letter.numbersLeft() > 0) {
          this.taken[this.index] = letter.nextNumber();
          this.index++;

        // If we're out of numbers for this letter, than back up
        } else {
          this.taken.splice(this.index, 1);
          letter.reset();
          this.index--;
        }
      }
    }
  }
}

module.exports = Sequencer;