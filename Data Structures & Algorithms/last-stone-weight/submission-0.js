class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxPriorityQueue()

        for(const stone of stones) heap.enqueue(stone)

        while(heap.size() > 1){
            const x = heap.dequeue()
            const y = heap.dequeue()

            if(x !== y) heap.enqueue(x - y)
        }

        return heap.front() ?? 0
    }
}
