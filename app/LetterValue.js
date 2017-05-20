class LetterValue {
  constructor(letter, baseNumbers) {
    this.letter = letter;
    this.baseNumbers = baseNumbers;
    this.reset();
  }

  reset() {
    this.numberList = this.baseNumbers.slice();
  }

  numbersLeft() {
    return this.numberList.length;
  }

  removeTaken(takenNumbers) {
    takenNumbers.forEach( number => {
      let foundAt = this.numberList.indexOf(number);
      if (foundAt >= 0) {
        this.numberList.splice(foundAt, 1);
      }
    });
  }

  nextNumber() {
    return this.numberList.shift();
  }
}

module.exports = LetterValue;