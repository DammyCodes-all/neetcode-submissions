class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const resMap = new Map()
        for(let i = 0; i < strs.length ; i++){
            const key = strs[i].split("").sort().join("")
            resMap.set(key, [...(resMap.get(key) ?? []) ,  strs[i]])
        }
        return Array.from(resMap.values())
    }
}
