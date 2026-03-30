class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
            let maxArea = 0 
    let stack = []
    let startingIdx = 0
    for(let i = 0; i < heights.length; i++){
        startingIdx = i 
        while(stack.length > 0 && stack[stack.length - 1][1] >= heights[i]){
            const [idx , h] = stack.pop()
            maxArea = Math.max(maxArea, h * (i - idx))
            startingIdx = idx
        }
        stack.push([startingIdx , heights[i]])
    }
    for(const [idx , h] of stack){
        maxArea = Math.max(maxArea, h * (heights.length - idx))
    }
    return maxArea
    }
}
