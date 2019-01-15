const main = require('../leetcode/338');
describe('countBits', () => {
  it("ex 1", () => {
    let input = 2;
    let output = main.countBits(input);
    expect(output).toEqual([0,1,1]);
  });

  it("ex 2", () => {
    let input = 5;
    let output = main.countBits(input);
    expect(output).toEqual([0,1,1,2,1,2]);
  });
});
