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
        let copies = new Map()
        let curr = head

        copies.set(null, null)

        while(curr){
            const newNode = new Node(curr.val, null, null)
            copies.set(curr, newNode)
            curr = curr.next
        }

        for(const [key, value] of copies){
            if(value === null) continue
            value.next = copies.get(key?.next)
            value.random = copies.get(key?.random)
        }

        return copies.get(head)
    }
}
