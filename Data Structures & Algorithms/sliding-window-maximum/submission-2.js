class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
            let stack = [] 
    const result = []

    for (let r = 0; r < nums.length; r++) {
        if (stack[0] <= r - k) stack.shift()
        
        while (stack.length && nums[stack[stack.length - 1]] <= nums[r]) {
            stack.pop()
        }
        stack.push(r)
        
        if (r >= k - 1) result.push(nums[stack[0]])
    }
    
    return result
    }
}
