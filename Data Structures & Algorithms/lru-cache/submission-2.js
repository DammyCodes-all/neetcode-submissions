class LRUCache {
    /**
     * @param {number} capacity
     */
    capacity = 0
    map = new Map()

    constructor(capacity) {
        this.map = new Map()
        this.dummyHead =  new Node()
        this.dummyTail =  new Node()
        this.capacity = capacity
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }

    insert(node){
        const prev = this.dummyTail.prev
        node.next =  this.dummyTail
        this.dummyTail.prev = node
        node.prev = prev
        prev.next = node
    }

    remove(node){
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.get(key)){
            const node =  this.map.get(key)
            this.remove(node)
            this.insert(node)
            return node.val
        }

        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            this.remove(this.map.get(key))
        }
        const newNode = new Node(key, value)
        this.insert(newNode)
        this.map.set(key, newNode)

        if(this.map.size > this.capacity){
            const LRU = this.dummyHead.next
            this.remove(LRU)
            this.map.delete(LRU.key)
        }
    }
}

class Node {
    constructor(key, val){
        this.key = key
        this.val =  val
        this.next =  null
        this.prev = null
    }
}
