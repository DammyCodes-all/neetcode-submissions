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
    return this.divide(lists, 0 , lists.length - 1)
    }

    divide (lists, l, r){
    if(l === r) return lists[l]
    const mid = Math.floor((l + r) / 2)
    const left = this.divide(lists , l , mid)
    const right = this.divide(lists, mid + 1 , r)
    return this.merge(left , right)
}

    merge(node1 , node2 ) {
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
        return dummy.next
}
}
