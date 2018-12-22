const main = require("../leetcode/572");

describe("isSubtree", () => {
  it("handle null trees", () => {
    let input = null;
    let sub = null;

    let output = main.isSubtree(input, sub);
    expect(output).toEqual(true);
  });
  
  it("handle both sub trees", () => {
    let input = new main.TreeNode(1);
      input.left = new main.TreeNode(1);
    let sub = new main.TreeNode(1);

    let output = main.isSubtree(input, sub);
    expect(output).toEqual(true);
  });

  it("handle first example", () => {
    let input = new main.TreeNode(3);
      input.left = new main.TreeNode(4);
        input.left.left = new main.TreeNode(1);
        input.left.right = new main.TreeNode(2);
      input.right = new main.TreeNode(5);

    let sub = new main.TreeNode(4);
      sub.left = new main.TreeNode(1);
      sub.right = new main.TreeNode(2);

    let output = main.isSubtree(input, sub);
    expect(output).toEqual(true);
  });
  
  it("handle 2nd example", () => {
    let input = new main.TreeNode(3);
      input.left = new main.TreeNode(4);
        input.left.left = new main.TreeNode(1);
        input.left.right = new main.TreeNode(2);
          input.left.right.left = new main.TreeNode(0);
      input.right = new main.TreeNode(5);

    let sub = new main.TreeNode(4);
      sub.left = new main.TreeNode(1);
      sub.right = new main.TreeNode(2);

    let output = main.isSubtree(input, sub);
    expect(output).toEqual(false);
  });
});
