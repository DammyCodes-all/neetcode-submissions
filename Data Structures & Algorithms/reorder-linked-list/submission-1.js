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
     * @return {void}
     */
    reorderList(head) {
        let slow = head 
        let fast = head

        while(fast && fast?.next){
            slow =  slow.next
            fast = fast.next?.next
        }

        let curr = slow?.next
        let l1 = head

        slow.next = null

        let l2 = null

        while(curr){
            const next = curr.next
            curr.next = l2
            l2 = curr
            curr = next
        }
while (l2) {
    const temp1 = l1.next
    const temp2 = l2.next

    l1.next = l2
    l2.next = temp1

    l1 = temp1
    l2 = temp2
}


    }
}
