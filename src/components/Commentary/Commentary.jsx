import React from 'react';
import { ReactLoggerComponent } from 'react-logger-component';

class Commentary extends ReactLoggerComponent {
    constructor(props) {
        super(props);
        this.displayName = this.constructor.name; // For Logger
    }

   render() {
    if (!this.props.commentary) {
        return (
            <div>
                Loading Commentary...
            </div>
        );
       } else {
            return(
                <div>
                    {JSON.stringify(this.props.commentary)}
                </div>
            );
       }
    }
}

export default Commentary;
