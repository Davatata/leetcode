const main = require('../leetcode/350');
describe('intersect', () => {
  it('return [] on empty cases', () => {
    let output = main.intersect([2.2],[]);
    expect(output).toEqual([]);
  });
  
  it('should solve basic case', () => {
    let output = main.intersect([1,2,2,1],[2,2]);
    expect(output).toEqual([2,2]);
  });

  it('should solve 2nd case', () => {
    let output = main.intersect([4,9,5], [9,4,9,8,4]);
    expect(output).toEqual([4,9]);
  });

  it('should solve 3rd case', () => {
    let output = main.intersect([2,1], [1,1]);
    expect(output).toEqual([1]);
  });

  it('should solve 4th case', () => {
    let output = main.intersect([1], [1]);
    expect(output).toEqual([1]);
  });
});
