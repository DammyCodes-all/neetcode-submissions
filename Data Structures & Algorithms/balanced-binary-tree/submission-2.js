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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return true

        let res = [true]

        this.height(root, res)

        return res[0]
    }

    height(node, res){
        if(!node) return 0

        const left = this.height(node.left, res)
        const right = this.height(node.right, res)

        if(!(Math.abs(left - right) <= 1)) res[0] = false

        return 1 + Math.max(left , right )
    }
}
