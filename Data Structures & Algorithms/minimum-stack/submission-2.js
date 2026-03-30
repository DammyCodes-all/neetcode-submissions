class MinStack {
    stack = []
    min = []
    constructor() {
        this.stack = []
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
                if(val <= (this.min[this.min.length - 1] ?? Infinity)) this.min.push(val)
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
                if(this.min[this.min.length - 1] === this.stack[this.stack.length - 1]) this.min.pop()
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1]
    }
}
