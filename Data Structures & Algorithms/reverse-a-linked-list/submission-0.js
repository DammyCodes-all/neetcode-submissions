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
     * @return {ListNode}
     */
    reverseList(head) {
         if(!head || !head.next) return head
    let currentNode = head
    let nextPointer = null 
    while(currentNode){
        const next = currentNode.next
        currentNode.next = nextPointer
        nextPointer = currentNode
        currentNode = next
    }
    return nextPointer
    }
}
