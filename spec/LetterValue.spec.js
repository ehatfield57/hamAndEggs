const LetterValue = require('../app/LetterValue');

describe('LetterValue', () => {
  let letterValue;
  beforeEach( () => {
    letterValue = new LetterValue('A', [0,1,2]);
  });

  it('should be of type LetterValue', () => {
    expect(letterValue instanceof LetterValue).toBe(true);
  });

  it('should let us know if numbers are left', () => {
    expect(letterValue.numbersLeft()).toBe(true);
  });

  it('should allow us to remove taken numbers', () => {
    letterValue.removeTaken([1]);
    expect(letterValue.numberList.join('')).toBe('02');
  });

  it('should allow us to get the next number', () => {
    let nextNumber = letterValue.nextNumber();
    expect(nextNumber).toBe(0);
    expect(letterValue.numberList.join('')).toBe('12');
  });
});
