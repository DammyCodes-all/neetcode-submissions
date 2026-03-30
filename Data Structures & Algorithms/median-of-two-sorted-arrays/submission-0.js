class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
    let final = []

    let l = 0
    let r = 0

    while(l < nums1.length && r < nums2.length){
        if(nums1[l] >= nums2[r]){
            final.push(nums2[r])
            r++
        } else {
            final.push(nums1[l])
            l++
        }
    }

    while(l < nums1.length){
        final.push(nums1[l])
        l++
    }
    while(r < nums2.length){
        final.push(nums2[r])
        r++
    }

    const isEven = final.length % 2 === 0

    const mid = Math.floor(final.length / 2)
    if(!isEven){
        return final[mid]
    }

    return (final[mid] + final[mid - 1]) / 2
    }
}
