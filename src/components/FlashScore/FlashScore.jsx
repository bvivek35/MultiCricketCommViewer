import React from 'react';
import { ReactLoggerComponent } from 'react-logger-component';

class FlashScore extends ReactLoggerComponent {
    constructor(props) {
        super(props);
        this.displayName = this.constructor.name; // For Logger
    }

    render() {
        if (!this.props.flashScore) {
            return (
                <div>
                    Loading FlashScore...
                </div>
            );
        } else {
            const { description, summary, status } = this.props.flashScore;
            return(
                <div>
                    <div>
                        {description}
                    </div>
                    <div>
                        {summary}
                    </div>
                    <div>
                        {status}
                    </div>
                </div>
            );
        }
        
    }
}

export default FlashScore;
