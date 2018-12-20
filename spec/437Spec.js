const main = require("../leetcode/437");
describe("pathSum", () => {
  it("should return 0 from empty array", () => {
    const root = null;
    const sum = 8;
    const output = main.pathSum(root, sum);
    expect(output).toEqual(0);
  });
  it("should return 3 from basic example", () => {
    const root = new main.TreeNode(10);
      root.left = new main.TreeNode(5);
        root.left.left = new main.TreeNode(3);
          root.left.left.left = new main.TreeNode(3);
          root.left.left.right = new main.TreeNode(-2);
        root.left.right = new main.TreeNode(2);
          root.left.right.right = new main.TreeNode(1);
      root.right = new main.TreeNode(-3);
        root.right.right = new main.TreeNode(11);
    const sum = 8;
    const output = main.pathSum(root, sum);
    expect(output).toEqual(3);
  });
});
