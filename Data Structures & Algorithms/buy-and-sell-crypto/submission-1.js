class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let smallestPrice = Infinity

        for(let i = 0; i < prices.length; i++){
            const profit = prices[i] - smallestPrice
            maxProfit = Math.max(profit, maxProfit)
            smallestPrice = Math.min(smallestPrice, prices[i]) 
        }

        return maxProfit
    }
}
