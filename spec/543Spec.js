const main = require('../leetcode/543');

// Input: The root of a Binary Search Tree like this:
//                1
//               / \
//              2   3
//             / \     
//            4   5 
//
// Output: 3

describe('Diameter of Binary Tree', () => {
  it('return basic example', () => {
    let root = new main.TreeNode(1);
      root.left = new main.TreeNode(2);
        root.left.left = new main.TreeNode(4);
        root.left.right = new main.TreeNode(5);
      root.right = new main.TreeNode(3);

    let ans = main.diameterOfBinaryTree(root);
    expect(ans).toEqual(3);
  });
});