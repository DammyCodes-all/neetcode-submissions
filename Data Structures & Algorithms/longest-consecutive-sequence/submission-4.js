class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums)
        let maxSequence  = 0

        for(const n of nums){
            if(!numsSet.has(n - 1)){
                let sequence = 1
                while(numsSet.has(sequence + n)){
                    sequence++
                }
                maxSequence = Math.max(maxSequence , sequence)
            }
        }

        return maxSequence
    }
}
