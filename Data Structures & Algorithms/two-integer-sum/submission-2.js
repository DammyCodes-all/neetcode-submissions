class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map()

        for(let i = 0; i < nums.length; i++){

             const remainder = target - nums[i]
             if(seen.has(remainder)) return [seen.get(remainder) , i]
             seen.set(nums[i], i) 
        }
    }
}
