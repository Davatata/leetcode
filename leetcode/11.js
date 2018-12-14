/**
 * 11. Container With Most Water
 * 
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate 
 * (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
 *  Find two lines, which together with x-axis forms a container, such that the container contains the
 *  most water.

    Note: You may not slant the container and n is at least 2.

 * @param {number[]} height
 * @return {number}
 */

// N^2 time complexity solution
var maxArea = function(height) {
  let max = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i+1; j < height.length; j++) {
      max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
    }
  }
  return max;
};

module.exports = {maxArea};