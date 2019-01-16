const main = require('../leetcode/406');
describe('reconstructQueue', () => {
  it('should solve basic example', () => {
    let input = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]];
    let output = main.reconstructQueue(input);
    expect(output).toEqual([[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]);
  });

  it('should solve my example', () => {
    let input = [[2,4],[4,1],[5,0],[3,2]];
    let output = main.reconstructQueue(input);
    expect(output).toEqual([[5,0],[4,1],[3,2],[2,4]]);
  });
});
