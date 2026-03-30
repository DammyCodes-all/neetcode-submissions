class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
            const anagramsMap = new Map()

    for(const str of strs){
        let keyArray = new Array(26).fill(0)
        for(const l of str){
            keyArray[l.charCodeAt(0) - 97]++
        }
        const key = keyArray.toString()
        const current = (anagramsMap.get(key) ?? [])
        current.push(str)
        anagramsMap.set(key , current) 
    }
    const res = []

    for(const val of anagramsMap.values()){
        res.push(val)
    }
    return res 
    }
}
