function FlashScore(cricinfo_url) {
    var _fs = {
        div : document.createElement("DIV"),
        desc : document.createElement("DIV"),
        summ : document.createElement("DIV"),
        stat : document.createElement("DIV"),
        atag : document.createElement("A"),
        getTag : function () {
            return _fs.div;
        },
        init : function () {
            console.log(cricinfo_url);
            _fs.div.classList.add("well");
            _fs.div.classList.add("well-sm");
            _fs.div.appendChild(_fs.desc);
            _fs.div.appendChild(_fs.summ);
            _fs.div.appendChild(_fs.stat);
            _fs.desc.appendChild(_fs.atag);
            _fs.atag.href = cricinfo_url;
        },
        update : function (json, cricinfo_url) {
            //console.log(json);
            _fs._update(json["description"], json["match"]["current_summary_abbreviation"], json["live"]["status"]);
        },
        _update : function (desc, summ, stat) {
            _fs.atag.innerHTML = desc;
            _fs.summ.innerHTML = summ;
            _fs.stat.innerHTML = stat;
        },
    };
    _fs.init();
    return _fs;
}
