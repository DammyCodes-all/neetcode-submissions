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
         if (!head || !head.next) return

    let s = head
    let f = head
    
    while (f.next && f.next.next) {
        s = s.next
        f = f.next.next
    }

    let prev = null
    let curr = s.next
    s.next = null

    while (curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    let first = head
    let second = prev

    while (second) {
        const t1 = first.next
        const t2 = second.next

        first.next = second
        second.next = t1

        first = t1
        second = t2
    }
    }
}
