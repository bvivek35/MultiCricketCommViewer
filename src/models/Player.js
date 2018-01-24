export default class Player {
    constructor(json) {
        this.objectId = json.object_id;
        this.playerId = json.player_id;
        this.name = json.known_as;
        this.shortName = json.card_short;
        this.longName = json.card_long;
    }
};
