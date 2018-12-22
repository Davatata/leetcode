/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 * 
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const sameTree = (t, s) => {
  if (t === null && s === null) {
    return true;
  } else if (t === null || s === null) {
    return false;
  } else {
    if (t.val !== s.val) {
      return false;
    } else {
      return sameTree(t.left, s.left) && sameTree(t.right, s.right);
    }
  }
};

var isSubtree = function(t, s) {
  let found = false;
  if (s === null && t === null) {
    return true;
  } else if (s === null || t === null) {
    return false;
  }

  if (s.val === t.val) {
    if (sameTree(t, s)) {  found = true; }
  }

  if (t.left) {
    if (isSubtree(t.left, s)) { found = true; }
  }
  if (t.right) { 
    if (isSubtree(t.right, s)) { found = true; }
  }
  return found;
};

module.exports = { isSubtree, TreeNode };
