/**
 * Definition for a binary tree node.
 * Given a binary tree, you need to compute the length of the 
 * diameter of the tree. The diameter of a binary tree is the 
 * length of the longest path between any two nodes in a tree. 
 * This path may or may not pass through the root.
 * 
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var diameterOfBinaryTree = function(root) {
  let max = 0;
  const diameter = (node) => {
    if (node === null) { return 0; }
    let L = diameter(node.left);
    let R = diameter(node.right);
    let largerChild = Math.max(L, R);
    max = Math.max(max, L + R);
    return largerChild + 1;
  };
  diameter(root);
  return max;
};

module.exports = {TreeNode, diameterOfBinaryTree};