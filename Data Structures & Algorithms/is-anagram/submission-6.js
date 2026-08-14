class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const anagram = new Map()

        for(let i = 0; i < s.length; i++){
            anagram.set(s[i],  (anagram.get(s[i]) ?? 0) + 1)
            anagram.set(t[i], (anagram.get(t[i]) ?? 0) - 1)
        }

        for(const [key , value] of anagram){
            if(value !== 0) return false
        }

        return true
    }
}

