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
    const dummy = new ListNode()
    let node =  dummy
    while(l1 || l2){
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
        node.next = new ListNode(sum % 10)
        carry = Math.floor(sum / 10)
        l1 = l1?.next 
        l2 = l2?.next
        node = node.next
    }
    if(!l1 && !l2 && carry !== 0){
        node.next = new ListNode(carry)
    }
    return dummy.next   
    }
}
