import FlashScore from './FlashScore';
import Commentary from './Commentary';
import Scorecard from './Scorecard';
import Team from './Team';

export default class Match {
    static mkPlayerMap(players, initalMap) {
        if (!initalMap)
            initalMap = {};
        return players.reduce((acc, curr) => {
            acc[curr.playerId] = curr;
            return acc;
        }, initalMap);
    }
    constructor(matchId, json) {
        this.matchId = matchId
        this.teams = (json.team || []).map(t => new Team(t));
        this.playerMap = this.teams.reduce((acc, team) => {
            return Match.mkPlayerMap(team.players, acc);
        }, {});
        this.flashScore = new FlashScore(json);
        this.scorecard = new Scorecard(json);
        this.commentary = new Commentary(json);
    }
};
