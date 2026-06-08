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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let pre_idx = 0
        let index_map =  new Map()

        inorder.forEach((val, index) => index_map.set(val, index))

        function dfs(l, r){
            if(l > r) return null

            const root_val = preorder[pre_idx++]
            const root = new TreeNode(root_val)
            const root_idx = index_map.get(root_val)

            root.left = dfs(l, root_idx - 1)
            root.right = dfs(root_idx + 1 , r)

            return root
        }

        return dfs(0, preorder.length - 1)
    }
}
