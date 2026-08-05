class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates  = candidates.sort((a, b) => a - b)

        const res = []
        const combo = []
        let sum = 0
        function dfs(i){
            if(i >= candidates.length || sum >= target){
                if(combo.length && sum === target) res.push([...combo])
                return
            }

            combo.push(candidates[i])
            sum += candidates[i]
            dfs(i + 1)

            combo.pop()
            sum -= candidates[i]
            while(i < candidates.length && candidates[i] === candidates[i + 1]) i += 1
            dfs(i + 1)
        }

        dfs(0)

        return res
    }
}
