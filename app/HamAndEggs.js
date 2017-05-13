class HamAndEggs {
  constructor(operator, words, total, rules) {
    this.op = operator;
    this.words = words;
    this.total = total;
    this.rules = rules || [];
    this.uniqueLetters = this.extractUniqueLetters();
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
}

module.exports = HamAndEggs;
