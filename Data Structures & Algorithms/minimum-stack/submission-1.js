class MinStack {
  
    constructor() {  this.items = []
    this.mins = []}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(val <= (this.mins[this.mins.length - 1] ?? Infinity)){
            this.mins.push(val)
        }
        this.items.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.items[this.items.length - 1] === this.mins[this.mins.length - 1]){
            this.mins.pop()
        }    
        this.items.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.items[this.items.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.mins[this.mins.length - 1]
    }
}
