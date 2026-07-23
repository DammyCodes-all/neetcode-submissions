class Twitter {

    userToFolloweeMap = null
    userToPostMap = null
    time = 0

    constructor() {
        this.userToFolloweeMap = new Map()
        this.userToPostMap = new Map()
        this.time = 0
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.userToPostMap.has(userId)) {
            this.userToPostMap.set(userId, []);
        }
        this.userToPostMap.get(userId).push([this.time++, tweetId]);
      this.time++
    }
    

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        if(!this.userToFolloweeMap.has(userId)){
            this.userToFolloweeMap.set(userId, new Set())
        }
        const followeeIds =  this.userToFolloweeMap.get(userId)
        followeeIds.add(userId)
        const res = []
        const heap = new MaxPriorityQueue((tweet) => tweet.count)

        for(const followeeId of followeeIds){
            if(this.userToPostMap.has(followeeId)){
                const tweets = this.userToPostMap.get(followeeId)
                const index = tweets.length - 1
                const [count, tweetId] = tweets[index]
                heap.enqueue({count, tweetId, nextIndex: index - 1, followeeId})

            }
        }

        while(!heap.isEmpty() && res.length < 10){
            const {tweetId, nextIndex, followeeId} = heap.dequeue()

            res.push(tweetId)

            if(nextIndex >= 0){
                const [olderTweetTime, olderTweetId] = this.userToPostMap.get(followeeId)[nextIndex]
                heap.enqueue({count: olderTweetTime, tweetId: olderTweetId, nextIndex: nextIndex - 1, followeeId})
            }
        }

        return res
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.userToFolloweeMap.has(followerId)) {
    this.userToFolloweeMap.set(followerId, new Set());
}
this.userToFolloweeMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
   if (this.userToFolloweeMap.has(followerId)) {
    this.userToFolloweeMap.get(followerId).delete(followeeId);
}
    }
}
