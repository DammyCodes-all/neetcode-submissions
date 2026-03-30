class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
         let l = 0
    let r = matrix.length - 1
    let row = undefined
    while(row === undefined && l <= r){
        const mid = Math.floor((r + l) / 2)
        if(matrix[mid][0] <= target && target <= matrix[mid][matrix[mid].length - 1]){
            row = mid
        } else if(matrix[mid][0] > target){
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    if(row === undefined) return false 

    let rowL = 0
    let rowR = matrix[row].length - 1

    while(rowL <= rowR){
        const mid = Math.floor((rowR + rowL) / 2)
        if(matrix[row][mid] === target) return true
        else if(matrix[row][mid] > target) rowR = mid - 1
        else rowL = mid + 1
    }
    return false
    }
}
