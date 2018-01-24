import React from 'react';
import { ReactLoggerComponent } from 'react-logger-component';

class Scorecard extends ReactLoggerComponent {
    constructor(props) {
        super(props);
        this.displayName = this.constructor.name; // For Logger
    }

    render() {
        if (!this.props.scorecard) {
            return(
                <div>
                    Loading Scorecard...
                </div>
            );
        } else {
            return(
                <div>
                    {JSON.stringify(this.props.scorecard)}
                </div>
            );
        }
        
    }
}

export default Scorecard;
