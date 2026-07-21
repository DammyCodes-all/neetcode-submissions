class Solution {
    leastInterval(tasks, n) {
          const freqMap = new Map();

    for (const task of tasks) {
        freqMap.set(task, (freqMap.get(task) ?? 0) + 1);
    }

    const heap = new MaxPriorityQueue();

    for (const freq of freqMap.values()) {
        heap.enqueue(freq);
    }

    const queue = [];
    let time = 0;

    while (!heap.isEmpty() || queue.length > 0) {
        time++;

        if (!heap.isEmpty()) {
            const freq = heap.dequeue() - 1;

            if (freq > 0) {
                queue.push([freq, time + n]);
            }
        }

        if (queue.length > 0 && queue[0][1] === time) {
            heap.enqueue(queue.shift()[0]);
        }
    }

    return time;
    }
}