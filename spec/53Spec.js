const main = require('../leetcode/53');

describe('maximum subarray', () => {
  it('should run 1st ex.', () => {
    let input = [-2,1,-3,4,-1,2,1,-5,4];

    let output = main.maxSubArray(input);
    expect(output).toEqual(6);
  });
  
  it('should run 2nd ex.', () => {
    let input = [-1,2,-4,3,-1,2,-2,3,-4,1];

    let output = main.maxSubArray(input);
    expect(output).toEqual(5);
  });
  
  it('should run 3rd ex.', () => {
    let input = [-2,2,-1,2,2,-3,2,-4,3,-2,2];

    let output = main.maxSubArray(input);
    expect(output).toEqual(5);
  });
  
  it('should run 4th ex.', () => {
    let input = [-1];

    let output = main.maxSubArray(input);
    expect(output).toEqual(-1);
  });
  
  it('should run 4th ex.', () => {
    let input = [-1, -2];

    let output = main.maxSubArray(input);
    expect(output).toEqual(-1);
  });
});

