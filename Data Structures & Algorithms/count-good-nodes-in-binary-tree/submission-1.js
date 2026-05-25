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
    goodNodes(root) {

        let maxArr = [0]

        this.dfs(root, maxArr, root.val)

        return maxArr[0]
    }

    dfs(root, maxArr, maxSeenSoFar){
        if(!root) return null

        if(root.val >= maxSeenSoFar) maxArr[0]++
        maxSeenSoFar = Math.max(maxSeenSoFar, root.val)

        this.dfs(root.left, maxArr, maxSeenSoFar)
        this.dfs(root.right, maxArr, maxSeenSoFar) 
    }
}
