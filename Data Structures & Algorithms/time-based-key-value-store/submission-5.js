class TimeMap {
    constructor() {
        this.map = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
                if(this.map.has(key)){
            this.map.get(key).push([value, timestamp])
        } else this.map.set(key, [[value, timestamp]])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
                let res = ""
        const array = this.map.get(key)   

        if(!array || array?.length < 1) return ""

        let l = 0
        let r = array.length - 1
        while(l <= r){
            const mid = Math.floor((l + r) / 2)

            if(array[mid][1] <= timestamp) {
                res = array[mid][0]
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        return res ?? ""
    }
}
