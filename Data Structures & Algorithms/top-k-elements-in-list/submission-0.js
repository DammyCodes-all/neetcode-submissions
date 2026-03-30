class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
         const numsMap = new Map()
    for(const num of nums){
        numsMap.set(num, (numsMap.get(num) ?? 0) + 1)
    } 
    const kMostFrequentArray = []
    for(let i = 1 ; i <= k ; i++){
        let largestElement = 0
        for(const [key , value] of numsMap){
            if(value > (numsMap.get(largestElement) ?? 0)){
              largestElement = key
            }
        }   
       kMostFrequentArray.push(largestElement)
       numsMap.delete(largestElement)
    }
    return kMostFrequentArray
    }
}
