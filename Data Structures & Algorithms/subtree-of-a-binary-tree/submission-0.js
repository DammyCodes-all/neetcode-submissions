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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let res = [false]
        this.rootMatch(root, subRoot, res)
        return res[0]
    }

    rootMatch(root, subRoot, res){
        if(!root || !subRoot) return 

        if(root.val === subRoot.val){
            const result = this.hasSameStructure(root, subRoot)
            if(result){
                res[0] = result
                return
            }    
        }
 
        this.rootMatch(root.left, subRoot, res)
        this.rootMatch(root.right, subRoot, res)

        return
    }

    hasSameStructure(root, subRoot){
        if(!root && !subRoot) return true
        if(!root || !subRoot) return false

        if(root.val !== subRoot.val) return false

        const leftIdentical = this.hasSameStructure(root.left, subRoot.left)
        if(!leftIdentical) return false

        const rightIdentical = this.hasSameStructure(root.right, subRoot.right)
        if(!rightIdentical) return false

        return true
    }
}
