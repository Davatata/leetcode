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

  it("should solve 3rd edge case", () => {
    let input = [1,3,2,3,1,2,3,1,4,2,5,1,3];
    let output = main.rob(input);
    expect(output).toEqual(21);
  });

  it("should solve 3rd edge case", () => {
    let input = [226,174,214,16,218,48,153,131,
      128,17,157,142,88,43,37,157,43,221,191,68,
      206,23,225,82,54,118,111,46,80,49,245,63,
      25,194,72,80,143,55,209,18,55,122,65,66,
      177,101,63,201,172,130,103,225,142,46,86,
      185,62,138,212,192,125,77,223,188,99,228,
      90,25,193,211,84,239,119,234,85,83,123,120,
      131,203,219,10,82,35,120,180,249,106,37,
      169,225,54,103,55,166,124];
    let output = main.rob(input);
    expect(output).toEqual(7102);
  });
});
