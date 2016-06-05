define([], function() {
    return {
        CRICINFO_SCORE_FEED_URL: 'http://static.cricinfo.com/rss/livescores.xml',
        CRICINFO_LIVE_INFO_BASE_URL: 'http://www.espncricinfo.com/ci/engine/match/',
        YQL_BASE_URI: 'https://query.yahooapis.com/v1/public/yql',
        genYQLUrl: function(url) {
            return this.YQL_BASE_URI + '?q=' + encodeURIComponent('select * from json where url=\"' + url + '\"') + '&format=json'
        },
        getMatchId: function(matchUrl) {
            var tmp = matchUrl.split('/').slice(-1)[0];
            var matchId = tmp.split('.')[0];
            return matchId
        },
        getMatchDataUrl: function(cricinfoMatchUrl) {
            var matchId = this.getMatchId(cricinfoMatchUrl);
            var cricinfoDataUrl = this.CRICINFO_LIVE_INFO_BASE_URL + matchId + ".json";
            return this.genYQLUrl(cricinfoDataUrl);
        }
    };
});
