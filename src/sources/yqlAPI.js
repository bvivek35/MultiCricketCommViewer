import axios from 'axios';
import { genFeedUrl, genMatchUrl } from '../utils/Misc';

export const getLiveMatches = () => {
    const url = genFeedUrl();
    console.info('Trying to get feed/list of live matches from Cricinfo');
    console.debug('Trying to fetch from: ', url);
    return axios.get(url)
            .then((resp) => resp.data);
};

export const getMatchData = (matchId) => {
    const url = genMatchUrl(matchId);
    console.info('Trying to get info of match: ', matchId);
    console.debug('Trying to fetch from: ', url);
    return axios.get(url)
            .then((resp) => resp.data);
};
