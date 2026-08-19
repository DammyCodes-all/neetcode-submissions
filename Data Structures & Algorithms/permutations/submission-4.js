class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = []

        const picked = Array.from(nums.length).fill(false)
        let currentPermutation = []
        function backtrack(){
            if(currentPermutation.length === nums.length){
                res.push([...currentPermutation])
                return
            }

            for(let i = 0; i < nums.length; i++){
                if(!picked[i]){
                    currentPermutation.push(nums[i])
                    picked[i] = true

                    backtrack()

                    currentPermutation.pop()
                    picked[i] = false
                }
            }
        }

        backtrack()

        return res
    }
}
