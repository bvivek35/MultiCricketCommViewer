import config from '../config/config.default';

export const genFeedUrl = () => {
    const res = genYQLUrl(config.CRICINFO_SCORE_FEED_URL, 'feed');
    console.debug(res);
    return res;
};

export const extractMatchId = (matchUrl) => {
    const lastSlash = matchUrl.lastIndexOf('/');
    const lastDot = matchUrl.lastIndexOf('.');
    const res = matchUrl.substring(lastSlash + 1, lastDot);
    console.debug(res);
    return res;
};

export const genMatchUrl = (matchId) => {
    const cricinfoUrl = config.CRICINFO_LIVE_INFO_BASE_URL + matchId + '.json';
    console.debug(cricinfoUrl);
    const res = genYQLUrl(cricinfoUrl, 'json');
    console.debug(res);
    return res;
};

export const genYQLUrl = (cricinfoUrl, type) => {
    const res = config.YQL_BASE_URI + '?' + genQueryString(cricinfoUrl, type);
    console.log(res);
    return res;
};

export const genQueryString = (url, type) => {
    const res = ['q=' + encodeURIComponent(genQuery(url, type)), 'format=' + 'json'].join('&');
    console.debug(res);
    return res;
};

export const genQuery = (url, type) => {
    const selectors = ['*'];
    const fromClauses = [type];
    const whereClauses = ['url=\'' + url + '\''];
    const res = genQuerySelectClause(selectors) + 
                genQueryFromClause(fromClauses) + 
                genQueryWhereClause(whereClauses);
    console.debug(res);
    return res;
};

export const genQuerySelectClause = (selectors) => {
    const res = 'SELECT ' + selectors.join(', ') + ' ';
    console.debug(res);
    return res;
};

export const genQueryFromClause = (fromClauses) => {
    const res = 'FROM ' + fromClauses.join(', ') + ' ';
    console.debug(res);
    return res;
}

export const genQueryWhereClause = (whereClauses) => {
    const res = 'WHERE ' + whereClauses.join(' and ') + ' ';
    console.debug(res);
    return res;
}
