class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i = 0; i < board.length; i++){
            const seen = new Set()
            for(let j =0; j < board[i].length; j++){
                if(board[i][j] === ".") continue
                if(seen.has(board[i][j])) return false
                seen.add(board[i][j])
            }
        }

        for(let i = 0; i < board.length; i++){
            const seen = new Set()
            for(let j =0; j < board[i].length; j++){
                if(board[j][i] === ".") continue
                if(seen.has(board[j][i])) return false
                seen.add(board[j][i])
            }
        }

        for(let boxRow = 0; boxRow < 9; boxRow += 3){
            for(let boxCol = 0; boxCol < 9; boxCol += 3){
                const seen = new Set()
                for(let i = 0; i < 3; i++){
                    for(let j = 0; j < 3; j++){
                        if(board[boxRow +i][boxCol + j] === ".") continue
                        if(seen.has(board[boxRow +i][boxCol + j])) return false
                        seen.add(board[boxRow +i][boxCol + j])
                    }
                }
            } 
        }

        return true
    }
}
