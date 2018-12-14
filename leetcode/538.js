/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var convertBST = function(root) {
  convert(root, 0);
  return root;
};

const convert = (node, sum) => {
  if (node === null) { return sum; }
  node.val += convert(node.right, sum);
  sum = convert(node.left, node.val);
  return sum;
}

module.exports = { convertBST, TreeNode};