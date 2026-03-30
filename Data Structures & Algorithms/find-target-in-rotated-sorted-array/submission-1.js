class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
          let l = 0
  let r = nums.length - 1

  while(l <= r) {
    const mid = Math.floor((l + r) / 2)
    if(nums[mid] === target) return mid
    if(nums[mid] >= nums[l] && (nums[l] <= target && nums[mid] > target)){
        r = mid - 1
    } else if (nums[r] >= nums[mid] && !(nums[mid] < target && nums[r] >= target)) {
    r = mid - 1
    } else {
        l = mid + 1
    }
  }

  return -1
    }
}
