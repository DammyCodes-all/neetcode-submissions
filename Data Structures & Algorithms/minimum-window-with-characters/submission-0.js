class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
           if(!t || t.length > s.length) return ""
    const tMap = new Map()
    const windowMap = new Map()
    for(const l of t) tMap.set(l, (tMap.get(l) ?? 0) + 1)
    let res = [-1, -1]
    let have = 0
    let need = tMap.size
    let minRes = Infinity
    let l = 0
    for(let r = 0; r < s.length; r++){
        const char = s[r]
        windowMap.set(char, (windowMap.get(char) ?? 0) + 1)
        if(tMap.has(char) && tMap.get(char) === windowMap.get(char)) have++
        while(have === need){
            if(r - l + 1 < minRes){
                res = [l , r]
                minRes = r - l + 1
            }
            windowMap.set(s[l] , (windowMap.get(s[l]) ?? 0 ) - 1)
            if(tMap.has(s[l]) && tMap.get(s[l]) > windowMap.get(s[l])){
                have--
            }
            l++
        }
    }
    return minRes === Infinity ? "" : s.slice(res[0] , res[1] + 1) 
    }
}
