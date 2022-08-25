import * as React from 'react';
import {Helmet} from "react-helmet";
import {IMikrotikHotspotVars} from "../MikrotikVar";

export default function RLogin({mkHotSpotData}: IMikrotikHotspotVars) {
    return (
        <div className="RLogin">
            <Helmet>
                <meta http-equiv="refresh" content={"0; url=" + mkHotSpotData.mkLinks.LinkRedirect}/>
                <meta http-equiv="pragma" content="no-cache"/>
                <meta http-equiv="expires" content="-1"/>
            </Helmet>
            Redirect to: {mkHotSpotData.mkLinks.LinkRedirect}
        </div>
    );
}