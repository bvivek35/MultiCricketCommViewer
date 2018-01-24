export default class FlashScore {
    constructor(json) {
        this.description = json.description;
        this.summary = json.match.current_summary_abbreviation;
        this.status = json.live.status;
    }
};
