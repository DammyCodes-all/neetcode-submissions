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
            let length = 0
    let curr = head

    while(curr){
        length++
        curr = curr.next
    }

    let dummy = new ListNode(null, head)
    curr = dummy
    let prev = null
    let i = 0

    while(curr){
        i++
        if((length - i) + 2 === n){
            if(!prev) curr = null
            else prev.next = curr.next
            break
        }
        prev = curr
        curr = curr.next
    }
    return dummy.next
    }
}
