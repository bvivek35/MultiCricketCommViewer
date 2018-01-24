import Event from './Event';

export default class Commentary {
    constructor(json) {
        if (!Array.isArray(json.comms || []))
            console.log('>>> ', json);
        const commsArray = !json.comms ? [] : (!Array.isArray(json.comms) ? [json.comms] : json.comms);
        this.comms = commsArray.reduce((acc, over) => {
            return acc.concat(
                (Array.isArray(over.ball) ? over.ball : [over.ball] || [])
                    .reduce((overAcc, ball) => {
                        overAcc.push({
                            commId: ball.comms_id,
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
