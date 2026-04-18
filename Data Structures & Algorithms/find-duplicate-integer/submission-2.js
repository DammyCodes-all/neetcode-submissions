class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
    for(const n of nums){
        const idx = Math.abs(n)
        if(nums[idx] < 0) return idx
        nums[idx] *= -1
    }
    }
}
