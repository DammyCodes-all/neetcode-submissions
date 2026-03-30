class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const anagram = new Array(26).fill(0)
        for(const l of s){
            const charCode = l.charCodeAt(0) - 97
            anagram[charCode]++
        }

        for(const l of t){
            const charCode = l.charCodeAt(0) - 97
            anagram[charCode]--
        }

        return anagram.every(val => val === 0)
    }
}
