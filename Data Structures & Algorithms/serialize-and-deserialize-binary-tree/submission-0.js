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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let preorder = ''

        const dfs = (root) => {
            if(!root){
                preorder += "N,"
                return
            }

            preorder += `${root.val},`       

            dfs(root.left)
            dfs(root.right)
        }

        dfs(root)

        return preorder
    }


    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const tokens = data.split(',')
        const dfs = (tokens) => {
            const token = tokens.shift()

            if(token === "N") return null

            const node = new TreeNode(token)

            node.left = dfs(tokens)
            node.right = dfs(tokens)

            return node
        }

        return dfs(tokens)
    }
}
