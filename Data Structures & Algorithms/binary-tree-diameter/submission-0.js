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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let res = [0]

        this.height(root, res)

        return res[0]
    }

    height(node, res){
        if(!node) return null

        const leftHeight = this.height(node.left, res)
        const rightHeight = this.height(node.right, res)

        res[0] = Math.max(res[0], leftHeight + rightHeight)
        return 1 + Math.max(leftHeight, rightHeight)
    }
}
