function yql_gen_url(query, fmt) {
    var yql_base_uri = "http://query.yahooapis.com/v1/public/yql";
    var yql_query = yql_base_uri + "?q=" + encodeURIComponent(query);
    var extra = "";
    if (fmt != "") {
        extra = "&format=" + fmt;
    }
    return yql_query + extra;
}

function yql_gen_query(url, type, extra) {
    var res = "select * from " + type + " where url='" + url + "' " + extra;
    return res;
}

function yql_feed_query(url) {
    return yql_gen_query(url, "feed", "");
}

function yql_html_query(url, xpath) {
    var ret = null;
    var extra = "";
    if (xpath !== "") {
        var extra = " and xpath='" + xpath + "''";
    }
    var final_url = url + extra;
    return yql_gen_query(url, "html");
}

function yql_get_feed(url, fmt, callback) {
    var final_url = yql_gen_url(yql_feed_query(url), fmt);
    console.log(final_url);
    $.get(final_url, {}, callback)
}

function yql_get_html(url, xpath, fmt, callback) {
    var final_url = yql_gen_url(yql_html_query(url, xpath),  fmt);
    console.log(final_url);
    $.get(final_url, {}, callback);
}
