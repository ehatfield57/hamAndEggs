
class TestMath {
  constructor(op, words, total) {
    this.words = words;
    this.operator = op;
    this.total = total;
  }

  test(settings) {
    let numbers = this.words.map( word => parseInt( word.split('').map( letter => settings[letter] ).join('') ));
    let total = parseInt( this.total.split('').map( letter => settings[letter] ).join('') );

    let testTotal = 0;
    switch( this.operator ) {
      case('+'):
        testTotal = numbers.reduce( (num, running) => running += num, numbers.pop() );
        break;
      case('-'):
        testTotal = numbers.reduce( (num, running) => running -= num, numbers.pop() );
        break;
      default:
        console.error(`I dont know how to do ${this.operator} yet`);
        exit;
        break;
    }

    return total === testTotal;
  }
}

module.exports = TestMath;