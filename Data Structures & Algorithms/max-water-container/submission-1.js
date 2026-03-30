class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
            let i = 0
    let j = height.length - 1
    let maxWater = 0
    while(i < j){
        const width = j - i
        const minHeight =  Math.min(height[i] , height[j])
        const area = width * minHeight
        maxWater = Math.max(maxWater , area)
        if(height[i] > height[j]){
           j--
        }else{
            i++
        }
    }
    return maxWater
    }
}
