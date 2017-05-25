const Letter = require('./Letter');
const Sequencer = require('./Sequencer');
const TestMath = require('./TestMath');

// TODO - Rules can and should be removed, and auto generated with first letter can't be zero
// TODO - Finish pretty print

// Usage:
//   hamAndEggs = require('./app/HamAndEggs');
//   hamAndEggs = new HamAndEggs('+', ['HAM', 'AND'], 'EGGS');
//   hamAndEggs.runIt();

class HamAndEggs {
  constructor(operator, words, total) {
    this.op = operator;
    this.words = words;
    this.total = total;
    this.rules = [];
    this.setup();
  }

  setup() {
    this.uniqueLetters = this.extractUniqueLetters();

    // Set up the rules, no leading letter of words or total can be zero
    for (let word of [...this.words, this.total]) {
      this.rules.push(`${word.substr(0,1)}#0`);
    }

    this.Symbols = {};
    this.uniqueLetters.forEach( letterString => {
      this.Symbols[letterString] = new Letter(letterString, this.rulesThatApply(letterString));
    });

    this.sequencer = new Sequencer(this.Symbols);
    this.testMath = new TestMath(this.op, this.words, this.total);
  }

  rulesThatApply(letterString) {
    return this.rules.filter( rule => rule[0] === letterString );
  }

  extractUniqueLetters() {
    let letters = [];
    [...this.words, this.total].forEach( str => {
      str.split('').forEach( letter => {
        if (! letters.includes(letter)) {
          letters.push(letter);
        }
      });
    });
    return letters.sort();
  }

  *solutions() {
    let sequences = this.sequencer.sequences();
    for (let sequence of sequences) {
      if (this.testMath.test(sequence) === true) {
        yield sequence;
      }
    }
  }

  prettyPrint(sequence) {
    let numbers = this.words.map( word => word.split('').map( letter => sequence[letter] ).join(''));
    let total = this.total.split('').map( letter => sequence[letter] ).join('');
    return '' + numbers.join(` ${this.op} `) + ' = ' + total;
  }

  runIt() {
    console.log('Hi Edward, question: ' + this.words.join(` ${this.op} `) + ' = ' + this.total);
    let solutions = this.solutions();
    for (let solution of solutions) {
      console.log('Hi Edward, solution:', this.prettyPrint(solution));
    }
  }
}

module.exports = HamAndEggs;
