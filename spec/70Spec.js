const main = require('../leetcode/70');

describe("climbStairs", function() { 

  it("should handle 2", function() {
    let ans = main.climbStairs(2);
    expect(ans).toEqual(2);
  });
  it("should handle 3", function() {
    let ans = main.climbStairs(3);
    expect(ans).toEqual(3);
  });
  it("should handle 4", function() {
    let ans = main.climbStairs(4);
    expect(ans).toEqual(5);
  });
  it("should handle 44", function() {
    let ans = main.climbStairs(44);
    expect(ans).toEqual(1134903170);
  });

});