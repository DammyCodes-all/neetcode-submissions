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
        const dummy = new ListNode(0, head)
        let prevGroup = dummy

        while(true){
            const kthNode = this.findNextKthNode(prevGroup, k)
            if(!kthNode) break

            let curr = prevGroup.next
            let prev = kthNode.next
            const nextGroup = kthNode.next

            while(curr !== nextGroup){
                const tmp = curr.next
                curr.next = prev
                prev = curr
                curr = tmp            
            }

            const tmp = prevGroup.next
            prevGroup.next = kthNode
            prevGroup = tmp
        }

        return dummy.next
    }

    findNextKthNode(node, k){
        for(let i = 0; i < k; i++){
            if(!node.next) return null
            node = node.next
        }
        return node
    }
}
