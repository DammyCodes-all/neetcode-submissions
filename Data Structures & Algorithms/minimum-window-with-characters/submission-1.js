class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
            if(s.length < t.length) return ""

    const tMap = new Map()
    let minStr = [null, null]
    let minStrLen = Infinity

    for(const str of t){
        tMap.set(str, (tMap.get(str) ?? 0) + 1)
    }

    let l = 0
    let matches = 0
    let windowMap = new Map()

    for(let r = 0; r < s.length; r++){
        if(tMap.has(s[r])){
            const freq = (windowMap.get(s[r]) ?? 0) + 1
            windowMap.set(s[r], freq)
            if(tMap.get(s[r]) === freq) matches++
        }
        while(matches === tMap.size){
            const windowSize = (r - l) + 1
            minStrLen = minStrLen > windowSize ? windowSize : minStrLen
            minStr = minStrLen >= windowSize ? [l, r] : minStr           
            if(tMap.has(s[l])){
                windowMap.set(s[l], windowMap.get(s[l]) - 1)
                if(tMap.get(s[l]) > windowMap.get(s[l])) matches--
            }
            l++
        }
    }
    return minStrLen === Infinity ? "" : s.slice(minStr[0] , minStr[1] + 1)
    }
}
