import React from 'react';

import FlashScore from '../FlashScore';
import Scorecard from '../Scorecard';
import Commentary from '../Commentary';

class Match extends React.Component {
    render() {
        return (
            <div>
                <FlashScore />
                <Scorecard />
                <Commentary />
            </div>
        );
    }
}

export default Match;
