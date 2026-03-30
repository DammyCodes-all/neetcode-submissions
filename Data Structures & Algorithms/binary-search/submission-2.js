class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target, l = 0, r = nums.length - 1) {
        if (l > r) return -1

        const mid = Math.floor((l + r) / 2)

        if (nums[mid] === target) return mid
        else if (nums[mid] < target) return this.search(nums, target, mid + 1, r)
        else return this.search(nums, target, l, mid - 1)
    }
}
