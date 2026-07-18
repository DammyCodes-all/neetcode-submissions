class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {

        const heap = new MaxPriorityQueue((point) => point.distance)

        for(const point of points){
           const distance = Math.sqrt((0 - point[0]) ** 2 + (0 - point[1]) ** 2)
           heap.enqueue({arr: point, distance: distance})

           if(heap.size() > k) heap.dequeue()
        }

        const res = []

        while(!heap.isEmpty()){
            res.push(heap.dequeue().arr)
        }

        return res
    }
}
