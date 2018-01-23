import React from 'react';
import { ReactLoggerComponent } from 'react-logger-component';

class FlashScore extends ReactLoggerComponent {
    constructor(props) {
        super(props);
        this.displayName = this.constructor.name; // For Logger
    }

    render() {
        return (
            <div>
                FlashScore
            </div>
        );
    }
}

export default FlashScore;
