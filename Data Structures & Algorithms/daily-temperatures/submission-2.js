class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
            let stack = []
    let res = new Array(temperatures.length).fill(0)

    for(let i = 0; i < temperatures.length; i++){
        while(stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]){
            const days = i - stack[stack.length - 1]
            res[stack[stack.length - 1]] = days
            stack.pop()
        }
        stack.push(i)
    }
    return res  
    }
}
