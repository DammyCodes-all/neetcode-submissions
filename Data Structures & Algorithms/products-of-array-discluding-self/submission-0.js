class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
            const resArray = []
    let prefix = 1
    for(let i = 0 ; i < nums.length; i++){
        resArray.push(prefix)
        prefix =  prefix * nums[i]
    }
    let postfix = 1
    for (let i = nums.length-1; i >= 0; i--){
        const prefix = resArray[i]
        resArray[i] = prefix * postfix
        postfix = postfix * nums[i]
    }
    return resArray
    }
}
