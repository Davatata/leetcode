/**
 * 108. Convert Sorted Array to Binary Search Tree
 * 
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the 
depth of the two subtrees of every node never differ by more than 1.
 * 
 Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// [-10,-3,0,5,9] =>
// [0,-3,9,-10,null,5]

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  let pivot = Math.floor(nums.length / 2);
  let parent = new TreeNode(nums[pivot]);
  parent.left = sortedArrayToBST(nums.slice(0, pivot));
  parent.right = sortedArrayToBST(nums.slice(pivot + 1));
  return parent;
};

module.exports = { sortedArrayToBST, TreeNode};