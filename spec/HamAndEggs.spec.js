const HamAndEggs = require('../app/HamAndEggs');

const fullRules = [
  'E=1', 'H#0', 'A#0'
];

describe('Test HamAndEggs puzzler', () => {
  it('should create a hamAndEggs instance', () => {
    let hamAndEggs = new HamAndEggs('+', ['HAM', 'AND'], 'EGGS', ['E=1','H#0','A#0']);
    expect(hamAndEggs instanceof HamAndEggs).toBe(true);
  });

  it('should be able to extract the unique letters', () => {
    let hamAndEggs = new HamAndEggs('+', ['HAM', 'AND'], 'EGGS');
    expect(hamAndEggs.uniqueLetters.join('')).toBe('ADEGHMNS');
  });

  it('should create a hamAndEggs instance', () => {
    let hamAndEggs = new HamAndEggs('+', ['HAM', 'AND'], 'EGGS', ['E=1','H#0','A#0']);
    expect(hamAndEggs instanceof HamAndEggs).toBe(true);
  });
});
