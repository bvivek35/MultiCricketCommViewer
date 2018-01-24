import React from 'react';
import { ReactLoggerComponent } from 'react-logger-component';

class Scorecard extends ReactLoggerComponent {
    constructor(props) {
        super(props);
        this.displayName = this.constructor.name; // For Logger
    }

    render() {
        if (!this.props.scorecard || !this.props.playerMap) {
            return(
                <div>
                    Loading Scorecard...
                </div>
            );
        } else {
            const battersMarkup = this.props.scorecard.batters.map((batter) => {
                return(
                    <div className="row" key={batter.playerId}>
                        <div className="text-left col-xs-2">{this.props.playerMap[batter.playerId].name}</div>
                        <div className="text-left col-xs-3">
                            <span>{batter.runs}({batter.balls})</span>
                            <span> - </span>
                            <span>{batter.fours}x4s</span>
                            <span> - </span>
                            <span>{batter.sixes}x6s</span>
                            <span> - </span>
                            <span>{batter.strikeRate}</span>
                        </div>
                    </div>
                );
            });
            console.debug('battersMarkup', battersMarkup);

            const bowlersMarkup = this.props.scorecard.bowlers.map((bowler) => {
                return(
                    <div className="row" key={bowler.playerId}>
                        <div className="text-left col-xs-2">{this.props.playerMap[bowler.playerId].name}</div>
                        <div className="text-left col-xs-3">
                            <span>{bowler.overs}</span>
                            <span> - </span>
                            <span>{bowler.maidens}</span>
                            <span> - </span>
                            <span>{bowler.runsConceded}</span>
                            <span> - </span>
                            <span>{bowler.wickets}</span>
                            <span> - </span>
                            <span>{bowler.economyRate}</span>
                        </div>
                    </div>
                );
            });
            console.debug('bowlersMarkup', bowlersMarkup);
            return(
                <div>
                    {battersMarkup}
                    {bowlersMarkup}
                </div>
            );
        }
        
    }
}

export default Scorecard;
