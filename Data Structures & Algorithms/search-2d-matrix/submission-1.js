class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
            let l = 0
    let r = matrix.length - 1
    let rowIndex = null

    while(l <= r && rowIndex === null){
        const mid = Math.floor((l + r) / 2)

        const midArray = matrix[mid]
        if(midArray[0] <= target && target <= midArray[midArray.length - 1]) rowIndex = mid
        else if(midArray[midArray.length - 1] < target) l = mid + 1
        else r = mid - 1
    }

    if(rowIndex ===  null) return false 

    l = 0
    r = matrix[rowIndex].length - 1

    while(l <= r){
        const mid = Math.floor((l + r) / 2)

        if(matrix[rowIndex][mid] === target) return true
        else if(matrix[rowIndex][mid] < target) l = mid + 1
        else r = mid - 1
    }

    return false 
    }
}
