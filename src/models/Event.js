export default class Event {
    static get RUNS() {
        return new Event();
    }
    static byCommBall(ball) {
        return Event.RUNS;
    }
    constructor() {
    }
}