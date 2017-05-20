const Sequencer = require('../app/Sequencer');

describe('Sequencer', () => {
  const symbolsData = {
    "A": {
      "letter": "A",
      "rules": [ "A#0" ],
      "numberList": [ 1, 2 ]
    },
    "B": {
      "letter": "B",
      "rules": [],
      "numberList": [ 0, 1, 2 ]
    },
    "C": {
      "letter": "C",
      "rules": [ "C=1" ],
      "numberList": [ 1 ]
    }
  };

  it('should be an instance of Sequencer', () => {
    let sequencer = new Sequencer(symbolsData);
    expect(sequencer instanceof Sequencer).toBe(true);
  });

  it('should generate a sequence', () => {
    let sequencer = new Sequencer(symbolsData);
    let sequences = sequencer.sequences();

    let combos = [...sequences];
    expect(combos.length).toBe(1);
    expect(combos[0].A).toBe(2);
    expect(combos[0].B).toBe(0);
    expect(combos[0].C).toBe(1);
  });
});