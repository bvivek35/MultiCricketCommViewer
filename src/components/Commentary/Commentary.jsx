import React from 'react';
import { ReactLoggerComponent } from 'react-logger-component';

class Commentary extends ReactLoggerComponent {
    constructor(props) {
        super(props);
        this.displayName = this.constructor.name; // For Logger
    }

   render() {
        return (
            <div>
                Commentary
            </div>
        );
    }
}

export default Commentary;
