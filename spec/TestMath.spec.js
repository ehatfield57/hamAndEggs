let TestMath = require('../app/TestMath');

describe('TestMath', () => {
  it('should create a TesteMath instance', () => {
    let testMath = new TestMath('+', ['A', 'A'], 'B');
    expect(testMath instanceof TestMath).toBe(true);
  });

  it('should test a function', () => {
    let testMath = new TestMath('+', ['A', 'A'], 'B');
    expect(testMath.test([{'A': 1, 'B': 2}])).toBe(true);
    expect(testMath.test([{'A': 1, 'B': 3}])).toBe(false);
  });
});