import React from 'react';
import { ReactLoggerComponent } from 'react-logger-component';

class Scorecard extends ReactLoggerComponent {
    constructor(props) {
        super(props);
        this.displayName = this.constructor.name; // For Logger
    }

    render() {
        return (
            <div>
                Scorecard
            </div>
        );
    }
}

export default Scorecard;
