class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
            let l = 0
    const freqMap = new Map()
    let longest = 0
    let maxFreq = s[l]
    for(let r = 0; r < s.length; r++){
        freqMap.set(s[r], (freqMap.get(s[r]) ?? 0) + 1)

        maxFreq = freqMap.get(s[r]) > freqMap.get(maxFreq) ? s[r] : maxFreq

        const replacement = ((r - l) + 1) - freqMap.get(maxFreq)

        if(replacement <= k) longest = (r - l) + 1
        else {
            freqMap.set(s[l], freqMap.get(s[l]) - 1)
            l++
        }   
    }
    return longest
    }
}
