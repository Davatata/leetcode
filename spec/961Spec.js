const main = require('../leetcode/961');
describe('reapeatedNtimes', () => {
  it(" behavior", () => {
    let input = [1,2,3,3];
    let output = main.repeatedNTimes(input);
    expect(output).toEqual(3);
  });
});
