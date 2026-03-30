class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
            const stack  = []
    const opr =  new Set(["+" , "-", "*", "/"])
    for(let i = 0; i < tokens.length; i++){
        if(opr.has(tokens[i])){
            let value  = 0
            const right = stack.pop()
            const left = stack.pop()
            if(tokens[i] === "+"){
                value = left  + right
            } else if( tokens[i] === "/"){
                value = left / right
            } else if(tokens[i] === "*"){
                value = left * right
            } else if(tokens[i] === "-"){
                value = left - right
            }
            stack.push(Math.trunc(value))
        } else {
            stack.push(Number(tokens[i]))
        }
    }
    return stack[stack.length - 1]
    }
}
