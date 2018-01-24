export default class Scorecard {
    constructor(json) {
        this.batters = (json.live.batting || []).map((batter) => {
            return {
                playerId: batter.player_id,
                runs: batter.runs,
                balls: batter.balls_faced,
                fours: batter.fours,
                sixes: batter.sixes,
                strikeRate: batter.strike_rate,
            };
        });
        this.bowlers = (json.live.bowling || []).map((bowler) => {
            return {
                playerId: bowler.player_id,
                overs: bowler.overs,
                maidens: bowler.maidens,
                conceded: bowler.conceded,
                wickets: bowler.wickets,
                economyRate: bowler.economy_rate
            };
        });
    }
};
