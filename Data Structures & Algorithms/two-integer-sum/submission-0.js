class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
     const numsMap = new Map()
     for(let i = 0 ;  i < nums.length ;  i++){
        const need = target - nums[i]
        if(numsMap.has(need)){
            return [numsMap.get(need) ,  i]
        }
        numsMap.set(nums[i] , i)
        }   
        return []
    }
}
