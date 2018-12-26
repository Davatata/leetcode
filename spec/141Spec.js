const main = require('../leetcode/141');
describe('hasCycle', () => {
  it('runs test 1', () => {
    let input = [3,2,0,-4];
    let output = main.hasCycle(input);
    expect(output).toEqual(true);
  });
});
