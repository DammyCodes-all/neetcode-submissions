class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
            let l = 0
    let r = s.length - 1

    while(l < r){
        while(!this.isAlphanumeric(s[l]) && l < r) l++
        while(!this.isAlphanumeric(s[r]) && l < r) r--

        if(s[l].toLowerCase() !== s[r].toLowerCase()) return false

        l++
        r--
    }

    return true
    }
    isAlphanumeric (s) {
return (s >= "A" && s <= "Z") || (s >= "a" && s <= "z") || (s >= "0" && s <= "9");
}
}
