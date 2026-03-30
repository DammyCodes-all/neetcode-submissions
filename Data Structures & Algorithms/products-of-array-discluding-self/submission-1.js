class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
            let res = new Array(nums.length).fill(1)

    let prevProduct = 1
    for(let i = 1; i < nums.length; i++){
        prevProduct = prevProduct * nums[i - 1]
        res[i] = prevProduct
    }
    prevProduct = 1
    for(let  i = nums.length - 1; i >= 0; i--){
        res[i] = res[i] * prevProduct
        prevProduct = nums[i] * prevProduct
    }
    return res
    }
}
