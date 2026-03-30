class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
            const stack = []

    for(const t of tokens){
        let a
        let b
        switch(t){
            case "+" : 
                 a = stack.pop()
                 b = stack.pop()
                stack.push(b + a)
                break
            case "-" :
                 a = stack.pop()
                 b = stack.pop()
                stack.push(b - a)
                break
            case "*" :
                 a = stack.pop()
                 b = stack.pop()
                stack.push(a * b)
                break
            case "/" :
                 a = stack.pop()
                 b = stack.pop() 
                stack.push(Math.trunc(b / a))
                break
            default : 
                stack.push(Number(t))
        }
    }
    return stack[stack.length - 1]    
    }
}
