class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    maxArea(height) {
            let l = 0
    let r = height.length - 1

    let maxWater = 0
    while(l < r){
        const waterTrapped = (r - l) * Math.min(height[r] , height[l])
        maxWater = Math.max(maxWater, waterTrapped)

        if(height[l] < height[r]) l++
        else r--
    }    

    return maxWater
    }
}
