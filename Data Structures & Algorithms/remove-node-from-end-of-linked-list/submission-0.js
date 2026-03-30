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
            if(!head.next) return null
    let length = 0
    let node = head
    while(node){
        length++
        node = node.next
    }

    let current = head
    let prevNode = null
    while(current){
        const isNode = length === n
        if(isNode){
            const next = current.next
            current.next = null
            if(prevNode) prevNode.next = next
            else head = next
            break
        } else {
            length--
            prevNode = current
            current = current.next
        }
    }
    return head
    }
}
