import React from 'react';
import { ReactLoggerComponent } from 'react-logger-component';

import Match from '../Match';
import {
    getLiveMatches as getLiveMatchesAPI,
} from '../../sources/yqlAPI';
 import { extractMatchId } from '../../utils/Misc';

class Layout extends ReactLoggerComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.displayName = this.constructor.name; // For Logger
    }
    componentDidMount() {
        getLiveMatchesAPI()
        .then((resp) => {
            console.log(resp);
            this.setState({
                liveMatches: ((resp.query || {}).results || {}).item
                                .map(match => extractMatchId(match.guid))
            });
        })
        .catch((err) => {
            console.error(err);
        });
    }

    render() {
        if (!this.state.liveMatches) {
            return(
                <div>
                    Fetching Matches...
                </div>
            );
        } else {
            const matchesList = this.state.liveMatches.map(matchId => {
                return(
                    <div key={matchId}>
                        <Match matchId={matchId} />
                    </div>
                );
            });
            return(
                <div> {matchesList} </div>
            );
        }       
    }
}

export default Layout;

