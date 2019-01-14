const main = require('../leetcode/832');
describe("flipAndInvertImage", () => {
  it("should do 1st example", () => {
    let input = [[1,1,0],[1,0,1],[0,0,0]];
    let output = main.flipAndInvertImage(input);
    expect(output).toEqual([[1,0,0],[0,1,0],[1,1,1]]);
  });
  
  it("should do 2nd example", () => {
    let input = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
    let output = main.flipAndInvertImage(input);
    expect(output).toEqual([[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]);
  });
});
