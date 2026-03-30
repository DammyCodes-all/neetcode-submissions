class TimeMap {
    keyStore = new Map()
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.get(key)){
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const valArray = this.keyStore.get(key)
        if(!valArray) return ""
        let l = 0
        let r = valArray.length - 1
        let res = -Infinity
        while(l <= r){
            const mid = Math.floor((l + r) / 2)
            if(valArray[mid][1] <= timestamp){
                res = Math.max(res , mid)
                l = mid + 1
            }
            else r = mid - 1 
        }
        return valArray[res]?.[0] ?? ""
    }
}
