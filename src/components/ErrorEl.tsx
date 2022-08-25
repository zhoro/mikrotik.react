import React from 'react'
import {IMikrotikHotspotVars} from "../MikrotikVar";

function ErrorEl(props: IMikrotikHotspotVars) {
    let errMessage;
    if (props.mkHotSpotData.mkMiscVars.Error.length > 0) {
        errMessage = <div className="info alert">{props.mkHotSpotData.mkMiscVars.Error}</div>
    }
    return (
        <div>
            {errMessage}
        </div>
    );
}

export default ErrorEl