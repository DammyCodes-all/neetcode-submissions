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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
    const dummy = { next: head }
    let fast = head
    let slow = dummy

    while(n > 0){
        fast = fast.next
        n--
    }

    while(fast){
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next
    return dummy.next
    }
}
