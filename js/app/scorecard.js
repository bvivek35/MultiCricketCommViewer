function ScoreCard () {
    var _sc = {
        div : document.createElement("DIV"),
        bat_table : document.createElement("TABLE"),
        bowl_table : document.createElement("TABLE"),
        getTag : function () {
            return _sc.div;
        },
        init : function () {
            _sc._add_headers();
            _sc.bat_table.classList.add("table");
            _sc.bowl_table.classList.add("table");
            _sc.bat_table.classList.add("table-bordered");
            _sc.bowl_table.classList.add("table-bordered");
            _sc.div.appendChild(_sc.bat_table);
            _sc.div.appendChild(_sc.bowl_table);
            _sc.div.classList.add("well");

        },
        update : function (json, map) {
            //console.log(json);
            var bat_stats = json["batting"];
            if (Object.keys(bat_stats).length > 2) {
                bat_stats = [bat_stats];
            }
            var bat_list = [];
            for (i in bat_stats) {
                var tmp = [map[bat_stats[i]["player_id"]], bat_stats[i]["runs"], bat_stats[i]["balls_faced"], bat_stats[i]["fours"], bat_stats[i]["sixes"], bat_stats[i]["strike_rate"]];
                bat_list.push(tmp);
            }
            _sc._update_table(_sc.bat_table,bat_list);

            var bowl_stats = json["bowling"];
            if (Object.keys(bowl_stats).length > 2) {
                bowl_stats = [bowl_stats];
            }
            var bowl_list = [];
            for (i in bowl_stats) {
                var tmp = [map[bowl_stats[i]["player_id"]], bowl_stats[i]["overs"], bowl_stats[i]["maidens"], bowl_stats[i]["conceded"], bowl_stats[i]["wickets"], bowl_stats[i]["economy_rate"]];
                bowl_list.push(tmp);
            }
            _sc._update_table(_sc.bowl_table,bowl_list);
        },
        _update_table : function (tab, l) {
            var tbody = tab.getElementsByTagName("tbody")[0];
            for (var i in l) {
                var tr = document.createElement("TR");
                for (var j in l[i]) {
                    var tmp = document.createElement("TD");
                    tmp.innerHTML = l[i][j];
                    tr.appendChild(tmp);
                }
                tbody.appendChild(tr);
            }
        },
        _add_headers : function () {
            var bat_th = document.createElement("TR");
            var l = ["Batsman", "Runs", "Balls", "4s", "6s", "SR"];
            for (i in l) {
                var tmp = document.createElement("TH");
                tmp.innerHTML = l[i];
                bat_th.appendChild(tmp);
            }
            var bowl_th = document.createElement("TR");
            l = ["Bowler", "Overs", "Maidens", "Runs", "Wkts", "Econ"];
            for (i in l) {
                var tmp = document.createElement("TH");
                tmp.innerHTML = l[i];
                bowl_th.appendChild(tmp);
            }
            var bat_thead = document.createElement("thead");
            bat_thead.appendChild(bat_th);
            _sc.bat_table.appendChild(bat_thead);
            _sc.bat_table.appendChild(document.createElement("tbody"));

            var bowl_thead = document.createElement("thead");
            bowl_thead.appendChild(bowl_th);
            _sc.bowl_table.appendChild(bowl_thead);
            _sc.bowl_table.appendChild(document.createElement("tbody"));
        },
    };
    _sc.init();
    return _sc;
}
