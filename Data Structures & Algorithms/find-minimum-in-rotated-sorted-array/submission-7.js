class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
            let l = 0
    let r = nums.length - 1

    let m = Infinity

    while(l <= r) {
        if(nums[l] <= nums[r]){
            m = Math.min(m, nums[l])
            break
        }

        const mid = l + Math.floor((r -l) / 2)
        m = Math.min(m, nums[mid])

        if(nums[l] <= nums[mid]){
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return m
    }
}
