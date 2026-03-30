class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let prefix = []
        for(let i = 0; i < height.length ; i++){
            if(i === 0) {
                prefix.push(null)
            } else {
                const prev = i - 1
                prefix.push(Math.max(height[prev] , prefix[prev]))
            }
        }
        let suffix = Array.from({length : height.length}, () => 0)
        for(let i = height.length - 1 ; i >= 0 ; i--){
            if(i === height.length - 1){
                suffix[i] = null
            }else{
                const before = i + 1
                suffix[i] = Math.max(height[before] , suffix[before])
            }
        }
        let maxWater = 0
        for(let i = 0; i < height.length ; i++){
            if(prefix[i] === null || suffix[i] === null) continue
            const trappedWater = Math.max(0 ,Math.min(suffix[i], prefix[i]) - height[i])
            maxWater += trappedWater
        }
        return maxWater
    }
}
