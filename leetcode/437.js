/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/* 
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var pathSum = function(root, sum) {
  let numSums = 0;

  const helper = (node, arr) => {
    if (node === null) { return; }
    arr = arr.map(x => x + node.val);
    arr.push(node.val);
    arr.forEach(element => {
      if (element === sum) {
        numSums += 1;
      }
    });
    if (node.left) { helper(node.left, [...arr]) };
    if (node.right) { helper(node.right, [...arr]) };
  };

  helper(root, []);

  return numSums;
};

module.exports = {pathSum, TreeNode};