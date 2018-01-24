import Event from './Event';

export default class Commentary {
    constructor(json) {
        this.comms = (json.comms || []).reduce((acc, over) => {
            return acc.concat(
                (Array.isArray(over.ball) ? over.ball : [over.ball] || [])
                    .reduce((overAcc, ball) => {
                        overAcc.push({
                            commsId: ball.comms_id,
                            overNumber: ball.over_number,
                            overUnique: ball.overs_unique,
                            overDisplay: ball.overs_actual,
                            commText: ball.text,
                            players: ball.players,
                            event: Event.byCommBall(ball)
                        });
                    return overAcc;
                }, [])
            );
        }, []);
        console.log(this.comms);
    }
};
