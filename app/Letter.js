class Letter {
  constructor(letter, rules) {
    this.letter = letter;
    this.rules = rules || [];
    this.reset();
  }

  reset() {
    this.numberList = [0,1,2,3,4,5,6,7,8,9];
    this.applyRules();
  }

  applyRules() {
    this.rules.forEach( rule => {
      let number = parseInt(rule[2]);
      switch(rule[1]) {
        case '=':
          this.numberList = [number];
          break;
        case '#':
          this.numberList.splice(this.numberList.indexOf(number), 1);
          break;
      }
    });
  }

  * numbers() {
    while (this.numberList.length)
      yield this.numberList.shift();
  }
}

module.exports = Letter;
