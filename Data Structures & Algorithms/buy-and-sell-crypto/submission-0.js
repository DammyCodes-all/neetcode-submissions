class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0 
        let r = 1
        let maxSum = 0
        while(r < prices.length){
            if(prices[l] > prices[r]){
                l = r
            } else {
                maxSum = Math.max(maxSum, prices[r] - prices[l])
            }
            r++
        }
        return maxSum
    }
}
