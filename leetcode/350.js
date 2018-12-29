/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
  if (!nums1.length || !nums2.length) {
    return [];
  }
  let largest = [];

  for(let i = 0; i < nums1.length; i++) {
    let pos = nums2.indexOf(nums1[i]);
    if (pos !== -1) {
      largest.push(nums1[i]);
      nums2.splice(pos,1);
    }
  }
  
  return largest;
};

module.exports = {intersect};