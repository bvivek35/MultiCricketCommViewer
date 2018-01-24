import React from 'react';
import { ReactLoggerComponent } from 'react-logger-component';

import './assets/Commentary.css';

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
            const commsMarkup = this.props.commentary.comms.map((comm, idx) => {
                return(
                    <div className="row commentary_margin_vertical" key={comm.commId != "" ? comm.commId : idx}>
                        <div className="col-xs-1">{comm.overDisplay}</div>
                        <div className="col-xs-4">
                            <span>{comm.players}</span>
                            {comm.commText && 
                                <span>,</span>
                            }
                            <span>{comm.commText}</span>
                        </div>
                    </div>
                );
            });
            return(
                <div className="scroller commentary_container_height">
                    {commsMarkup.length > 0 &&
                        commsMarkup
                    }
                    {commsMarkup.length == 0 &&
                        <div>No Commentary Available for this match</div>
                    }
                </div>
            );
       }
    }
}

export default Commentary;
