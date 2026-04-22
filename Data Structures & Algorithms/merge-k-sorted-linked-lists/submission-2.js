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
    mergeKLists(lists) {    if(lists.length < 1) return null
    if(lists.length < 2) return lists[0] ? lists[0] : null

    const mid = Math.floor(lists.length / 2)

    const left = lists.slice(0, mid)
    const right = lists.slice(mid)

    return this.merge(this.mergeKLists(right), this.mergeKLists(left))  }

    merge(list1, list2){
    const dummy = new ListNode()
    let curr = dummy

    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }

    if(list1) curr.next = list1
    if(list2) curr.next = list2

    return dummy.next
}


}
