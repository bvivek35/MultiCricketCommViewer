import React from 'react';
import { ReactLoggerComponent } from 'react-logger-component';

import FlashScore from '../FlashScore';
import Scorecard from '../Scorecard';
import Commentary from '../Commentary';
import {
    getMatchData as getMatchDataAPI
} from '../../sources/yqlAPI';


class Match extends ReactLoggerComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.displayName = this.constructor.name; // For Logger
    }

    componentDidMount() {
        console.debug('Recv props: ', this.props)
        getMatchDataAPI(this.props.matchId)
        .then((resp) => {
            this.setState({matchData: resp});
        })
        .catch((err) => {
            console.error('Error fetching match data: ', err);
        });
    }

    render() {
        console.debug('Match with matchId: ', this.props.matchId);
        if (!this.state.matchData) {
            return (
                <div>
                    Loading Match Data...
                </div>
            );
        } else {
            console.debug(this.state);
            return (
                <div>
                    <FlashScore />
                    <Scorecard />
                    <Commentary />
                </div>
            );
        }
    }
}

export default Match;
