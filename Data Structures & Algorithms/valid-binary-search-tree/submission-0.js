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
    isValidBST(root) {
            return this.dfs(root, -Infinity, Infinity)
    }

    dfs(root, min, max){
            if(!root) return true
    if(root.val <= min || root.val >= max) return false

    const isLeftValid = this.dfs(root.left, min , root.val)
    if(!isLeftValid) return false

    const isRightValid = this.dfs(root.right, root.val, max)
    if(!isRightValid) return false

    return true
    }

}
