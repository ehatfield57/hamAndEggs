class LetterValue {
  constructor(letter, baseNumbers) {
    this.letter = letter;
    this.baseNumbers = baseNumbers;
    this.running = false;
    this.numberList = baseNumbers.slice();
  }

  baseNumbersCount() {
    return this.baseNumbers.length;
  }

  numbersLeft() {
    return this.numberList.length > 0;
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