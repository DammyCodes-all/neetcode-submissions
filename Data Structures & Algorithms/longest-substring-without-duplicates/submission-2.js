class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
            let longest = 0
    const windowSet = new Set()

    let l = 0

    for(let r = 0; r < s.length; r++){
        if(windowSet.has(s[r])){
            while(windowSet.has(s[r])){
                windowSet.delete(s[l])
                l++
            }
        } 
        windowSet.add(s[r])
        longest = Math.max(longest, (r - l) + 1)
    }

    return longest  
    }
}
