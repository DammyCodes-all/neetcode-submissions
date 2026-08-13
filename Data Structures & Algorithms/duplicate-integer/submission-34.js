class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicateSet = new Set()

        for(const num of nums){
            if(duplicateSet.has(num)) return true
            
            duplicateSet.add(num)
        }

        return false
    }
}
