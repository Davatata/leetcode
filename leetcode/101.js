/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isSymmetric = function(root) {
  if (root === null) { return true; }
  if (root.length < 2) { return true; }
  let ans = true;
  const nums = [0];
  const pairs = [];
  const helper = (i, alt, node) => {
    nums[i] = node.val;
    pairs.push([i, alt]);
    if (node.left) {
      helper(i * 2, alt * 2 + 1, node.left);
    }
    if (node.right) {
      helper(i * 2 + 1, alt * 2, node.right);
    }
  }
  helper(1, 1, root);
  for (const pair of pairs) {
    if (nums[pair[0]] !== nums[pair[1]]) {
      return false;
    }
  }
  return ans;
};

module.exports = {TreeNode, isSymmetric};