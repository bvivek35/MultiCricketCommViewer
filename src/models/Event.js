export default class Event{
    static get EVENTS() {
        return Object.freeze({
            RUNS: {},
            OUT: {},
            FOUR: {},
            SIX: {},
            LEG_BYE: {},
            BYE: {},
            WIDE: {},
            NO_BALL: {},
            DEFAULT: {}
        });
    }
    static byCommBall(ball) {
        return Event.EVENTS.DEFAULT;
    }
};
