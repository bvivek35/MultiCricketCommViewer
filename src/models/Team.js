import Player from './Player';

export default class Team {
    constructor(json) {
        this.objectId = json.object_id;
        this.teamId = json.team_id;
        this.fileName = json.team_filename;
        this.generalName = json.team_general_name;
        this.teamName = json.team_name;
        this.shortName = json.team_short_name;
        this.abbr = json.team_abbreviation;
        this.players = (json.player || []).map(p => new Player(p));
    }
};
