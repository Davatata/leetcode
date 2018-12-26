/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var hasCycle = function(head) {
  let seen = {};
  while(head !== null) {
    if (seen[head.val]) {
      return true;
    }
    seen[head.val] = true;
    head = head.next;
  }
  return false;
};

module.exports = {hasCycle, ListNode};