/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
          let carry = 0
  let dummy = new ListNode()
  let curr =  dummy

  while(l1 || l2){
    const a  = l1 ? l1.val : 0
    const b = l2 ? l2.val : 0

    const sum =  a + b + carry
    carry = Math.floor(sum / 10)

    const newNode = new ListNode((sum % 10))
    curr.next = newNode
    curr = curr.next

    l1 = l1?.next ?? null
    l2 = l2?.next ?? null
  }

  if(carry) curr.next = new ListNode(carry)
  
  return dummy.next  
    }
}
