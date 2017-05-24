let TestMath = require('../app/TestMath');

describe('TestMath', () => {
  it('should create a TesteMath instance', () => {
    let testMath = new TestMath('+', ['A', 'A'], 'B');
    expect(testMath instanceof TestMath).toBe(true);
  });

  it('should test a function', () => {
    let testMath = new TestMath('+', ['A', 'A'], 'B');
    expect(testMath.test({'A': 1, 'B': 2})).toBe(true);
    expect(testMath.test({'A': 1, 'B': 3})).toBe(false);

    testMath = new TestMath('+', ['ABC', 'CBA'], 'DDD');
    expect(testMath.test({'A': 1, 'B': 2, 'C': 3, 'D': 4})).toBe(true);

    testMath = new TestMath('-', ['DDD', 'ABC'], 'CBA');
    expect(testMath.test({'A': 1, 'B': 2, 'C': 3, 'D': 4})).toBe(true);
  });
});