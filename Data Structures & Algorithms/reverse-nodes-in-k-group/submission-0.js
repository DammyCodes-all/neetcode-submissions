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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(null , head)
        let prevGroup = dummy

        while(true){
            const kth = this.getKth(prevGroup, k)
            if(!kth) break

            const groupNext = kth.next
            let curr = prevGroup.next
            let prev = kth.next
            while(curr !== groupNext){
                const next = curr.next 
                curr.next = prev
                prev = curr
                curr = next
            }

            const nextGroup = prevGroup.next
            prevGroup.next = kth
            prevGroup = nextGroup
        }
        return dummy.next
    }

    getKth(curr, k) {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }
}
