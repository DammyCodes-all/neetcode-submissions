class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
            let stack = []
    let startIdx = 0
    let maxArea = 0

    for(let i = 0; i < heights.length; i++){
        startIdx = i
        while(stack.length > 0 && stack[stack.length - 1][1] >= heights[i]){
            const area =  stack[stack.length - 1][1] * (i - stack[stack.length - 1][0])
            startIdx = stack[stack.length - 1][0]
            maxArea = Math.max(area, maxArea)
            stack.pop()
        }
        stack.push([startIdx, heights[i]])
    }

    for(const [idx, height] of stack){
        const area = height * (heights.length - idx)
        maxArea = Math.max(area, maxArea)
    }
    return maxArea
    }
}
