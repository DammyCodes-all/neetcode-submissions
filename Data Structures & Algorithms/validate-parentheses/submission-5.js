class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
            const pairs = {
        "}" : "{",
        ")" : "(",
        "]" : "["
    }
    let stack = []
    for(const b of s){
        if(pairs[b]){
            if(stack[stack.length - 1] !== pairs[b]) return false
            stack.pop()
        }
        else stack.push(b)
    }

    return stack.length === 0
    }
}
