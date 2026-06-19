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
    maxPathSum(root) {
        let res = -Infinity

        function dfs(root){
            if(!root) return 0

           let leftMaxSum = dfs(root.left)
           let rightMaxSum = dfs(root.right)

           const maxPathThroughNode = root.val + leftMaxSum + rightMaxSum
           res = Math.max(res, maxPathThroughNode)

           leftMaxSum = leftMaxSum < 0 ? 0 : leftMaxSum
           rightMaxSum = rightMaxSum < 0 ? 0: rightMaxSum
           
           const maxSubTree = Math.max(leftMaxSum, rightMaxSum)
           res = Math.max(res, (root.val + maxSubTree))

           return root.val + maxSubTree
        }

        dfs(root)

        return res
    }
}
