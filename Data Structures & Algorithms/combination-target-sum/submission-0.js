class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = []

        const subset = []
        let sum = 0 

        function dfs(i){
            if(sum >= target || i >= nums.length){
                if(sum === target) res.push([...subset])
                return
            }


            subset.push(nums[i])
            sum += nums[i]
            dfs(i)

            const popped = subset.pop()
            sum -= popped
            dfs(i + 1)
        }
        dfs(0)

        return res
    }
}
