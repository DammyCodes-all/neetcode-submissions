class LRUCache {
    /**
     * @param {number} capacity
     */
    map = new Map()
    size = 0
    maxSize = 0
    left = new Node()
    right = new Node()

    constructor(capacity) {
        this.maxSize = capacity
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    insert(node) {
        const prev = this.right.prev
        prev.next = node
        node.next = this.right
        node.prev = prev
        this.right.prev = node
    }

    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    get(key) {
        if(!this.map.has(key)) return -1
        const node = this.map.get(key)
        this.remove(node)
        this.insert(node)
        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            const node = this.map.get(key)
            node.val = value
            this.remove(node)
            this.insert(node)
        } else {
            if(this.size >= this.maxSize){
                const LRU = this.left.next
                this.remove(LRU)
                this.map.delete(LRU.key)
                this.size -= 1
            }
            const node = new Node(key , value)
                this.map.set(key, node)
                this.insert(node)
                this.size += 1
        }
    }
}

class Node{
    val = null
    next = null
    prev = null
    key = null
    constructor(key, val , next, prev){
        this.val = val ?? null
        this.next = next ?? null
        this.prev = prev ?? null
        this.key = key ?? null
    }
}
