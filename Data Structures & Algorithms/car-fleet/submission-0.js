class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
            let stack = []
    let pairs = position.map((pos, idx) => [pos, speed[idx]]).sort((a , b) => a[0] - b[0])
    for(let i = pairs.length - 1; i >= 0; i--){
        const time = (target - pairs[i][0]) / pairs[i][1]
        if(stack.length > 0 && time > stack[stack.length - 1]){
            stack.push(time)
        } else if(stack.length < 1){
            stack.push(time)
        }
    }
    return stack.length
    }
}
