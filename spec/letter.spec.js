const Letter = require('../app/Letter');

describe('A Letter symbol object', () => {
  it('should create a new instance', () => {
    let letter = new Letter('A', ['A#0']);
    expect(letter instanceof Letter).toBe(true);
  });
  
  it('should have all number options by default', () => {
    let numbers = (new Letter('A')).numbers();
    for (let i = 0; i < 10; i++) {
      expect(numbers.next().value).toBe(i);
    }
    expect(numbers.next().done).toBe(true);
  });

  it('should apply the rules to the number options', () => {
    let numbers = (new Letter('A', ['A#0','A#9'])).numbers();
    for (let i = 1; i < 9; i++) {
      expect(numbers.next().value).toBe(i);
    }
    expect(numbers.next().done).toBe(true);

    numbers = (new Letter('A', ['A=0'])).numbers();
    expect(numbers.next().value).toBe(0);
    expect(numbers.next().done).toBe(true);
  });
});
