const HamAndEggs = require('../app/HamAndEggs.js');

describe('Test HamAndEggs puzzler', () => {
  it('should create a hamAndEggs instance', () => {
    let hamAndEggs = new HamAndEggs('+', ['HAM', 'AND'], 'EGGS');
    expect(hamAndEggs instanceof HamAndEggs).toBe(true);
  });
});