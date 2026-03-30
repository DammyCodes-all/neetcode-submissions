class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const numset = new Set()
        for(const n of nums){
            if(numset.has(n)) return n
            numset.add(n)
        }
    }
}
