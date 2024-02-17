const Queue = require("../lib/queue");

const connected = (graph, startUser, endUser) => {
    if(Object.keys(graph).length === 0){
        return false;
    }
    if(startUser === endUser){
        return true;
    }
    const enqueued = [startUser];
    const discovered = new Queue(); 
    discovered.enqueue(startUser);

    while(discovered.first){
        const user = discovered.dequeue();
        for(const friend of graph[user]){
            if(friend === endUser) {
                return true;
            }
            if(!enqueued.includes(friend)){
                enqueued.push(friend);
                discovered.enqueue(friend);
            }
        }
    }
    return false;
};

module.exports = connected;
