const main = require('../leetcode/448');

describe("findDisappearedNumbers", function() { 

  it("Should find 5,6", function() {
    let ans = main.findDisappearedNumbers([4,3,2,7,8,2,3,1]);
    expect(ans).toEqual([5,6]);
  });

  it("Should find 1,4", function() {
    let ans = main.findDisappearedNumbers([5,2,2,7,8,3,3,6]);
    expect(ans).toEqual([1,4]);
  });

});