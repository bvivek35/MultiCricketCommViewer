/*
    Match object.
    Call only the update method.
    Handle any DOM
*/
x = [];
function Match(_url) {
    var _match = {
        div : document.createElement("DIV"),
        getTag : function () {
            return _match.div;
        },
        fs : FlashScore(_url),
        sc : ScoreCard(),
        comm : Commentary(),
        cricinfo_url : _url,
        timerid : -1,
        init : function () {
            var data_url = get_data_url(_match.cricinfo_url);
            _match.url =  "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent("select * from json where url=\"" + data_url + "\"") + "&format=json";
            _match.div.classList.add("jumbotron");
            _match.div.appendChild(_match.fs.getTag());
            _match.div.appendChild(_match.sc.getTag());
            _match.div.appendChild(_match.comm.getTag());
            _match.update();
        },
        update : function () {
            $.getJSON(_match.url, _match._update);
        },
        _update : function (json) {
            x.push(json["query"]["results"]["json"]);
            _match.players_map = _match._mk_player_map(json["query"]["results"]["json"]["team"]);
            _match.teams_map = _match._mk_team_map(json["query"]["results"]["json"]["team"]);
            _match.fs.update(json["query"]["results"]["json"], _match.cricinfo_url);
            _match.sc.update(json["query"]["results"]["json"]["live"], _match.players_map);
            _match.comm.update(json["query"]["results"]["json"]["comms"]);
        },
        _mk_player_map : function (team) {
            var res = {};
            t1 = team[0]["player"];
            for (var i in t1) {
                res[t1[i]["player_id"]] = t1[i]["known_as"];
            }
            t2 = team[1]["player"];
            for (var i in t2) {
                res[t2[i]["player_id"]] = t2[i]["known_as"];
            }
            return res;
        },
        _mk_team_map : function (team) {
            var res = {};
            res[team[0]["team_id"]] = team[0]["team_general_name"];
            res[team[1]["team_id"]] = team[1]["team_general_name"];
            return res;
        },
    };
    _match.init();
    return _match;
}

function get_data_url(url) {
    var arr1 = url.split("/");
    var arr2 = arr1[arr1.length - 1].split(".");
    var matchid = arr2[0];
    return CRICINFO_LIVE_INFO_BASE_URL + matchid + ".json";
}
