var CRICINFO_SCORE_FEED_URL = "http://static.cricinfo.com/rss/livescores.xml";
var CRICINFO_LIVE_INFO_BASE_URL = "http://www.espncricinfo.com/ci/engine/match/";

function Manager() {
    var _manager = {
        url : "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent("select * from feed where url='" + CRICINFO_SCORE_FEED_URL + "'") +"&format=json",
        matches : [],
        update_matches : function () {
            // not sure if this is really needed.
            // updates the list of matches being maintained.
            // the user could very well refresh the page if he knows
            // a match could start soon :/
        },
        init : function () {
            // AJAX call to rss.
            // create list of matches.
            $.getJSON(_manager.url, function (json) {
                console.log(json);
                var items = json["query"]["results"]["item"];
                for (var i = 0; i < items.length; ++i) {
                    var url = items[i]["guid"];
                    //var data_url = get_data_url(url);
                    //url = "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent("select * from json where url=\"" + data_url + "\"") + "&format=json";
                    _manager.matches.push(Match(url));
                }
                for (var i = 0; i < _manager.matches.length; ++i) {
                    document.body.appendChild(_manager.matches[i].getTag());
                }
            });
        },
    };
    _manager.init();
    return _manager;
}

function get_data_url(url) {
    var arr1 = url.split("/");
    var arr2 = arr1[arr1.length - 1].split(".");
    var matchid = arr2[0];
    return CRICINFO_LIVE_INFO_BASE_URL + matchid + ".json";
}
