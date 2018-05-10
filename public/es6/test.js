class Log{
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push({ message, timestamp: Date.now() });
    }
    [Symbol.iterator]() {
        return this.messages.values();
    }
}
const log = new Log();
log.add("asdasd");
log.add("asdasdasdavcasd");
log.add("zxcewthrgfdsv");
log.add("12v34trhgtb");
log.add("213245t34y65trgefdsa");
log.add("123r24tgrfedsa");
log.add("asdvfgrhy6453we");
log.add("123");

for(let entry of log){
    console.log(`${entry.message} @ ${entry.timestamp}`);
}
