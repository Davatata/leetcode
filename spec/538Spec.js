const main = require('../leetcode/538');

// Input: The root of a Binary Search Tree like this:
//               5
//             /   \
//            2     13

// Output: The root of a Greater Tree like this:
//              18
//             /   \
//           20     13

describe("convertBST", function() {  

  it("converts simple tree with 3 values", function() {
    let root = new main.TreeNode(5);
    root.left = new main.TreeNode(2);
    root.right = new main.TreeNode(13);

    let ans = main.convertBST(root);
    expect(ans.val).toEqual(18);
    expect(ans.left.val).toEqual(20);
    expect(ans.right.val).toEqual(13);
  });
  
  it("converts tree with 5 values", function() {
    let root = new main.TreeNode(2);
      root.left = new main.TreeNode(0);
        root.left.left = new main.TreeNode(-4);
        root.left.right = new main.TreeNode(1);
      root.right = new main.TreeNode(3);

    let ans = main.convertBST(root);
    expect(ans.val).toEqual(5);
      expect(ans.left.val).toEqual(6);
        expect(ans.left.left.val).toEqual(2);
        expect(ans.left.right.val).toEqual(6);
      expect(ans.right.val).toEqual(3);
  });

  it("converts tree with only l right node", () => {
    let root = new main.TreeNode(1);
      root.left = new main.TreeNode(0);
        root.left.left = new main.TreeNode(-2);
      root.right = new main.TreeNode(4);
        root.right.left = new main.TreeNode(3);
    
    let ans = main.convertBST(root);
    expect(ans.val).toEqual(8);
      expect(ans.left.val).toEqual(8);
        expect(ans.left.left.val).toEqual(6);
      expect(ans.right.val).toEqual(4);
        expect(ans.right.left.val).toEqual(7);

  })
});