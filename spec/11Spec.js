const main = require('../leetcode/11');

describe("maxArea", function() { 

  it("Should find 5,6", function() {
    let ans = main.maxArea([1,8,6,2,5,4,8,3,7]);
    expect(ans).toEqual(49);
  });

});