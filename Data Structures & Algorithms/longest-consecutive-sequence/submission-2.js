class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    if(nums.length < 1) return 0
    const numMap = new Map()
    for(let i = 0; i <nums.length ; i++){
        numMap.set(nums[i], i)
    }
    const sequences = new Map()
    for(let i = 0; i <nums.length ; i++){
        let j = 0
        if(!numMap.has(nums[i] - 1) && !sequences.has(nums[i])){
            const sequenceStart = nums[i]
            sequences.set(sequenceStart, 1)
            let currentNum = sequenceStart
            while(j >= 0){
                if(numMap.has(currentNum + 1)){
                    sequences.set(sequenceStart, sequences.get(sequenceStart) + 1)
                    currentNum += 1
                } else {
                    j--
                }
            }
        }
    }
    let longestSequence = 1
    for(const [key, value] of sequences){
        if(value > longestSequence) longestSequence = value
    }
    return longestSequence
    }
}
