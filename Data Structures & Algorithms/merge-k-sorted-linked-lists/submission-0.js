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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
            if(lists.length < 1) return null

    for(let i = 1; i < lists.length; i++){
        let node1 = lists[i - 1]
        let node2 = lists[i]

        const dummy = new ListNode()
        let curr = dummy

        while(node1 && node2){
            if(node1?.val < node2?.val){
                curr.next = node1
                curr = curr.next
                node1 = node1.next
            } else {
                curr.next = node2
                curr = curr.next
                node2 = node2.next
            }
        }
        curr.next = node1 || node2
        lists[i] = dummy.next
    }
    return lists[lists.length - 1]
    }
}
