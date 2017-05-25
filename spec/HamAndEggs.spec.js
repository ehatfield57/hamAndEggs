const HamAndEggs = require('../app/HamAndEggs');

describe('Test HamAndEggs puzzler', () => {
  it('should create a hamAndEggs instance', () => {
    let hamAndEggs = new HamAndEggs('+', ['HAM', 'AND'], 'EGGS');
    expect(hamAndEggs instanceof HamAndEggs).toBe(true);
  });

  it('should be able to extract the unique letters', () => {
    let hamAndEggs = new HamAndEggs('+', ['HAM', 'AND'], 'EGGS');
    expect(hamAndEggs.uniqueLetters.join('')).toBe('ADEGHMNS');
  });

  it('should create a hamAndEggs instance', () => {
    let hamAndEggs = new HamAndEggs('+', ['HAM', 'AND'], 'EGGS');
    expect(hamAndEggs instanceof HamAndEggs).toBe(true);
  });
});
