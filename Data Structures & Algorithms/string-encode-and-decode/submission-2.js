class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let resString = ""
        for(const str of strs){
            resString += `${str.length}#${str}`
        }
        return resString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let output = []
        let i = 0
        while(i < str.length){
            let length = ""
            while(str[i] !== "#"){
                length += str[i]
                i++
            }
            i++
            output.push(str.slice(i, Number(length) + i))
            i += Number(length)
        }
        return output
    }
}
