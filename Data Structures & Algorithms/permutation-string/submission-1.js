class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s2.length < s1.length) return false

        let s1Array = new Array(26).fill(0)
        let s2Array = new Array(26).fill(0)

        for(let i = 0; i < s1.length; i++){
            s1Array[s1.charCodeAt(i) - 97]++
            s2Array[s2.charCodeAt(i) - 97]++
        }

        let matches = 0

        for(let i = 0; i < 26; i++){
            if(s1Array[i] === s2Array[i]) matches++
        }

        let l = 0
        for(let r = s1.length; r < s2.length; r++){
            if(matches === 26) return true

            const lIndex = s2[l].charCodeAt(0) - 97
            if(s2Array[lIndex] === s1Array[lIndex]) matches--
            s2Array[lIndex]--
            if(s2Array[lIndex] === s1Array[lIndex]) matches++
            l++

            const rIndex = s2[r].charCodeAt(0) - 97
            if(s2Array[rIndex] === s1Array[rIndex]) matches--
            s2Array[rIndex]++
            if(s2Array[rIndex] === s1Array[rIndex]) matches++
        }
        return matches === 26
    }
}
