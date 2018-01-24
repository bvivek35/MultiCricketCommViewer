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
                <div className="row">
                    <div className="col-xs-12">
                        {description}
                    </div>
                    <div className="col-xs-12">
                        {summary}
                    </div>
                    <div className="col-xs-12">
                        {status}
                    </div>
                </div>
            );
        }
        
    }
}

export default FlashScore;
