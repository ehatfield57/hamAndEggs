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
    expect(letterValue.numbersLeft()).toBe(3);
  });

  it('should allow us to remove taken numbers', () => {
    letterValue.removeTaken([1]);
    expect(letterValue.numberList.join('')).toBe('02');
  });

  it('should allow us to get the next number', () => {
    expect(letterValue.numbersLeft()).toBe(3);
    let nextNumber = letterValue.nextNumber();
    expect(nextNumber).toBe(0);
    expect(letterValue.numberList.join('')).toBe('12');

    expect(letterValue.numbersLeft()).toBe(2);
    nextNumber = letterValue.nextNumber();
    expect(nextNumber).toBe(1);
    expect(letterValue.numberList.join('')).toBe('2');

    expect(letterValue.numbersLeft()).toBe(1);
    nextNumber = letterValue.nextNumber();
    expect(nextNumber).toBe(2);
    expect(letterValue.numberList.join('')).toBe('');

    expect(letterValue.numbersLeft()).toBe(0);
    nextNumber = letterValue.nextNumber();
    expect(typeof nextNumber === 'undefined').toBe(true);

    letterValue.reset();
    expect(letterValue.numbersLeft()).toBe(3);
  });
});
