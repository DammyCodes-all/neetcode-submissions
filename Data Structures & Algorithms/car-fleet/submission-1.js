class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
            const pair = position.map((pos, i) => [pos, speed[i]]).sort((a, b) => b[0] - a[0])

    let stack = []

    for(const [pos, s] of pair){
        const time = (target - pos) / s
        stack.push(time)
        if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]){
            stack.pop()
        }
    }

    return stack.length
    }
}
