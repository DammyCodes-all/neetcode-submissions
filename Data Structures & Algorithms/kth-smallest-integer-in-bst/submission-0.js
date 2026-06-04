/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {

        k =  Array.isArray(k) ? k : [k]

        if(!root) return null

        const kthSmallestOnLeft = this.kthSmallest(root.left, k)

        if(kthSmallestOnLeft) return kthSmallestOnLeft

        k[0]--

        if(k[0] === 0) return root.val
        
        const kthSmallestOnRight = this.kthSmallest(root.right, k)

        if(kthSmallestOnRight) return kthSmallestOnRight 
    }
}
