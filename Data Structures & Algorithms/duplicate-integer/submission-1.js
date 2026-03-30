class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
            const numberMap = new Map()
    for(let i = 0;  i < nums.length ; i++){
        if(numberMap.has(nums[i])) return true
        numberMap.set(nums[i], 1)
    }
    return false
    }
}
