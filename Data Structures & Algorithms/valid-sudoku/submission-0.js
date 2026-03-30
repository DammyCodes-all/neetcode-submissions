class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i = 0; i < board.length ; i++){
            const seen = new Set()
            for(let j = 0 ; j < board[i].length; j++){
                if(board[i][j] === ".") continue
                if(seen.has(board[i][j])) return false
                seen.add(board[i][j])
            }
        }
        for(let i = 0; i < board.length ; i++){
            const seen = new Set()
            for(let j = 0; j < board.length ; j++){
                if(board[j][i] === ".") continue
                if(seen.has(board[j][i])) return false
                seen.add(board[j][i])
            }
        } 
        for(let square = 0; square < 9 ; square++){
            const seen = new Set()
            for(let r = 0;  r < 3 ;  r++){
               const row = Math.floor(square / 3) * 3 + r
                for(let c = 0; c < 3; c++){
                    const col = ( square % 3 ) * 3 + c
                    if(board[row][col] === ".") continue
                    if(seen.has(board[row][col])) return false
                    seen.add(board[row][col])
                }
            }

        } 
        return true
    }
}
