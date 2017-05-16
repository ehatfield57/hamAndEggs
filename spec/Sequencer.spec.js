const Sequencer = require('../app/Sequencer');

describe('Sequencer', () => {
  const symbolsData = {
    "A": {
      "letter": "A",
      "rules": [ "A#0" ],
      "numberList": [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    },
    "D": {
      "letter": "D",
      "rules": [],
      "numberList": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    },
    "E": {
      "letter": "E",
      "rules": [ "E=1" ],
      "numberList": [ 1 ]
    },
    "G": {
      "letter": "G",
      "rules": [],
      "numberList": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    },
    "H": {
      "letter": "H",
      "rules": [ "H#0" ],
      "numberList": [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    },
    "M": {
      "letter": "M",
      "rules": [],
      "numberList": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    },
    "N": {
      "letter": "N",
      "rules": [],
      "numberList": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    },
    "S": {
      "letter": "S",
      "rules": [],
      "numberList": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    }
  };

  it('should be an instance of Sequencer', () => {
    let sequencer = new Sequencer(symbolsData) ;
    expect(sequencer instanceof Sequencer).toBe(true);
  });

  it('should...', () => {
  });
});