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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        return this.checkEquality(p, q)
    }

    checkEquality(p, q){
        if(!p && !q) return true

        if((p && !q) || (q && !p)) return false

        if(p.val !== q.val) return false

        const leftEqual = this.checkEquality(p.left, q.left)
        if(!leftEqual) return false

        const rightEqual = this.checkEquality(p.right, q.right)
        if(!rightEqual) return false

        return true
    }
}
