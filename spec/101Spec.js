const main = require("../leetcode/101");

describe("isSymmetric", () => {
  it("should solve simple example", () => {
    let root = new main.TreeNode(1);
      root.left = new main.TreeNode(2);
        root.left.left = new main.TreeNode(3);
        root.left.right = new main.TreeNode(4);
      root.right = new main.TreeNode(2);
        root.right.left = new main.TreeNode(4);
        root.right.right = new main.TreeNode(3);

    let output = main.isSymmetric(root);
    expect(output).toEqual(true);
  });
});
    //     1
    //    / \
    //   2   2
    //  / \ / \
    // 3  4 4  3