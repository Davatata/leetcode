/**
 * 234. Palindrome Linked List
 * 
 * Given a singly linked list, determine if it is a palindrome.
 * 
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

var isPalindrome = function(head) {
  let ans = [];
  while (head !== null) {
    ans.push(head.val);
    head = head.next;
  }
  for (let i = 0, j = ans.length - 1; i < j; i++, j--) {
    if (ans[i] !== ans[j]) {
      return false;
    }
  }
  return true;
};

module.exports = {isPalindrome, ListNode};