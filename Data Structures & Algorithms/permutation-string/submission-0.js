class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length ) return false
        let matches = 0
        let s1Array = Array(26).fill(0)
        let s2Array = Array(26).fill(0)

        for(let i = 0; i < s1.length; i++){
            s1Array[s1.charCodeAt(i) - 97]++
            s2Array[s2.charCodeAt(i) - 97]++
        }

        for(let i = 0; i < 26 ; i++){
            if(s1Array[i] === s2Array[i]) matches++
        }

        let l = 0
        for(let r = s1.length; r < s2.length; r++){
            if(matches === 26) return true
            const indexR = s2.charCodeAt(r) - 97 
            s2Array[indexR]++
            if(s2Array[indexR] === s1Array[indexR]) matches++
            else if(s1Array[indexR] === s2Array[indexR] - 1) matches--

            const indexL = s2.charCodeAt(l) - 97
            s2Array[indexL]--
             if(s2Array[indexL] === s1Array[indexL]) matches++
            else if(s1Array[indexL] === s2Array[indexL] + 1) matches--
            l++
        }
        return matches === 26
    }
}
