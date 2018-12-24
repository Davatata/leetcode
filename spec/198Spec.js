const main = require("../leetcode/198");
describe("rob", () => {
  it("should solve basic problem", () => {
    let input = [1,2,3,1];
    let output = main.rob(input);
    expect(output).toEqual(4);
  });

  it("should solve 2nd problem", () => {
    let input = [2,7,9,3,1];
    let output = main.rob(input);
    expect(output).toEqual(12);
  });

  it("should solve edge case", () => {
    let input = [2,1,1,2];
    let output = main.rob(input);
    expect(output).toEqual(4);
  });

  it("should solve 2nd edge case", () => {
    let input = [1,3,1,3,100];
    let output = main.rob(input);
    expect(output).toEqual(103);
  });
});
