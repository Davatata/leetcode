const main = require('../leetcode/108');

describe("sortedArrayToBST", function() { 

  it("should make a binary tree", function() {
    let root = new main.TreeNode(0);
      root.left = new main.TreeNode(-3);
      root.right = new main.TreeNode(9);
        root.left.left = new main.TreeNode(-10);
        root.right.left = new main.TreeNode(5);

    let ans = main.sortedArrayToBST([-10,-3,0,5,9]);
    expect(ans.val).toEqual(root.val);
    expect(ans.left.val).toEqual(root.left.val);
    expect(ans.right.val).toEqual(root.right.val);
    expect(ans.left.left.val).toEqual(root.left.left.val);
    expect(ans.right.left.val).toEqual(root.right.left.val);
  });

});