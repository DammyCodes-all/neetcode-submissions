class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const anagramMap = new Map()
        for(const letter of s){
            anagramMap.set(letter, anagramMap.has(letter) ? anagramMap.get(letter) + 1 : 1)
        }
           for(const letter of t){
        if(!anagramMap.has(letter)) return false
        anagramMap.set(letter,  anagramMap.get(letter) - 1)
        if(anagramMap.get(letter) < 0) return false
    }
        return true
    }
}
