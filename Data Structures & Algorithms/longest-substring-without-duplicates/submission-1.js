class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const duplicateSet = new Set
    let l = 0
    let res = 0
    for(let r = 0 ; r < s.length; r++){
        while(duplicateSet.has(s[r])){
            duplicateSet.delete(s[l])
            l++
        }
        duplicateSet.add(s[r])
        res = Math.max(duplicateSet.size, res)
    }
    return res
    }
}
