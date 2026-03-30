class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {    if(!s) return true
    let i = 0
    let j = s.length - 1
    while(i <= s.length && j >= 0 && i < j){
        while(i < j && !isAlphaNumeric(s[i])){
            i++
        }
          while(i < j && !isAlphaNumeric(s[j])){
            j--
        }
        if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
        i++
        j--
    }
    return true
};
}
function isAlphaNumeric(char) {
  return (char >= '0' && char <= '9') || 
         (char >= 'a' && char <= 'z') || 
         (char >= 'A' && char <= 'Z');
}