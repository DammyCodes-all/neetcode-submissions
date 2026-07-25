class MedianFinder {
    heap = null
    constructor() {
        this.heap = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.heap.enqueue(num)
    }

    /**
     * @return {number}
     */
    findMedian() {
        const nums = []

        while(!this.heap.isEmpty()){
            nums.push(this.heap.dequeue())
        }

        let res = 0

        if(nums.length % 2 === 0){
            const half = nums.length / 2
            res =( nums[half] + nums[half - 1])/2
        
        } else {
            res = nums[Math.floor((0 + nums.length) / 2)]
        }

        for(const num of nums){
            this.heap.enqueue(num)
        }

        return res
    }
}
