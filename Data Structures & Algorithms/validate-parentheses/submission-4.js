class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        const bracketMap = new Map([["}" , "{"] , [")" , "("] , ["]" , "["]])
        for(const l of s){
            if(bracketMap.has(l)){
                if(stack.length > 0 && bracketMap.get(l) === stack[stack.length - 1]){
                stack.pop() 
                } else {
                    return false
                }
            } else {
                stack.push(l)
            }
        }
        return stack.length > 0 ? false : true
    }
}
