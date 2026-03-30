class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalStr = ""
        for(const str of strs){
            finalStr = finalStr +  `${str.length}#${str}`
        }
        return finalStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const resArray = []
        let wordLength = ''
        let currentString = ''
        for(let i = 0; i < str.length ; i++){
            if(!isNaN(str[i])){
                wordLength = wordLength + str[i]
            }
            if(str[i] === "#"){
                for(let j = i + 1; j <= (Number(wordLength) + i) ; j++){
                    currentString = currentString + str[j]
                }
                resArray.push(currentString)
                currentString = ""
                i = i + Number(wordLength)
                wordLength = ""
            }
        }
        return resArray
    }
}
