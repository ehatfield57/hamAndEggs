
class TestMath {
  constructor(op, words, total) {
    this.functions = [];
    this.setup(words.map( word => [...word] ), [...total], op);
  }

  setup(words, total, op) {
    while (true) {
      let letters = [];
      for (let x=0; x < words.length; x++) {
        let letter = words[x].splice(-1, 1);
        if (letter.length > 0) {
          letters.push(letter[0]);
        }
      }

      if (letters.length === 0) {
        break;
      }

      let totalLetter = total.splice(-1, 1);

      this.functions.push((settings, carry=0) => {
        console.log('Hi Edward, letters:', letters);
        console.log('Hi Edward, totalLetter:', totalLetter);
        console.log('Hi Edward, settings:', settings);
        console.log('Hi Edward, op:', op);

        return (given) => {
          console.log('Hi Edward, given:', given);
          let runningTotal = 0;
          letters.forEach( letter => {
            console.log('Hi Edward, letter:', letter);
          });
          return true;
        };
      });
    }
  }

  test(settings) {
    for( let func of this.functions) {
      console.log('Hi Edward, func:', func);
      let results = func(settings);
      console.log('Hi Edward, results:', results);
      if (! results) {
        console.log('Hi Edward, func:', func, ', settings:', settings);
        return false;
      }
    }
    return true;
  }
}

module.exports = TestMath;