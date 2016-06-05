function Commentary () {
    var _comm = {
        div : document.createElement("DIV"),
        getTag : function () {
            return _comm.div;
        },
        init : function () {
            _comm.div.classList.add("well");
            _comm.div.classList.add("well-lg");
            _comm.div.classList.add("comm");
            //_comm.div.innerHTML = "Commentary : Pls Wait While Loading...";
        },
        update : function (json) {
            for (var i in json) {
                var over = json[i];
                if (Object.keys(over["ball"]).length <= 6) {
                    if (over["runs"] && over["wickets"]) {
                        var score = "End Of Over : " + over["runs"] + " / " + over["wickets"];
                        _comm.div.appendChild(document.createTextNode(score));
                    }
                    for (var j in over["ball"]) {
                        var cdiv = _comm._mk_comm_div(over["ball"][j]["overs_actual"], over["ball"][j]["event"], over["ball"][j]["text"], over["ball"][j]["dismissal"]);
                        _comm.div.appendChild(cdiv);
                    }
                    _comm.div.appendChild(document.createElement("HR"));
                }
            }
            //console.log(json);
        },
        _mk_comm_div : function (overnum, ev, text, dismissal) {
            //console.log(arguments);
            var res = document.createElement("DIV");
            var ball = document.createElement("LABEL");ball.innerHTML = overnum;
            var e = document.createElement("SPAN");e.innerHTML = ev;
            var t = document.createElement("SPAN");t.innerHTML = text;
            res.appendChild(ball);res.appendChild(document.createTextNode("\u00A0\u002D\u00A0"));
            res.appendChild(e); res.appendChild(document.createTextNode("\u00A0\u002D\u00A0"));
            res.appendChild(t);
            if (dismissal !== "") {
                res.appendChild(document.createElement("BR"));
                var dis = document.createElement("SPAN")
                res.appendChild(dis);
                res.appendChild(document.createElement("BR"));
            }
            res.appendChild(document.createElement("BR"));

            return res;
        },
    };
    _comm.init();
    return _comm;
}
