import FlashScore from './FlashScore';
import Commentary from './Commentary';
import Scorecard from './Scorecard';
import Team from './Team';

export default class Match {
    constructor(matchId, json) {
        this.matchId = matchId
        this.teams = (json.team || []).map(t => new Team(t));
        this.flashScore = new FlashScore(json);
        this.scorecard = new Scorecard(json);
        this.commentary = new Commentary(json);
    }
};
