class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
         let l = 0
    let r = nums.length - 1

    while(l <= r){
        const mid = Math.floor((l + r) / 2)
        if(nums[mid] === target) return mid
        else if(nums[mid] > target){
            if(nums[l] > target && nums[l] <= nums[mid]){
                l = mid + 1
            } else {
                r = mid - 1
            }
        } else {
            if(nums[r] < target && nums[r] > nums[mid]){
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }  
    return -1

    }
}
