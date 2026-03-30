// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const copyMap = new Map()
        copyMap.set(null , null)

        let curr = head

        while(curr){
            copyMap.set(curr, new Node(curr.val))
            curr = curr.next
        }

        curr = head
        while(curr){
            const node = copyMap.get(curr)
            node.next = copyMap.get(curr.next)
            node.random = copyMap.get(curr.random)
            curr = curr.next
        }

        return copyMap.get(head)
    }
}
