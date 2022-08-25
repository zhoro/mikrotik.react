import * as React from 'react';
import {Helmet} from "react-helmet";
import {IMikrotikHotspotVars} from "../MikrotikVar";
import FooterEl from "./FooterEl";
import i18n from "i18next";

export default function ALogin({mkHotSpotData}: IMikrotikHotspotVars) {
    return (
        <div className="ALogin">
            <Helmet>
                <meta http-equiv="refresh" content={"0; url=" + mkHotSpotData.mkLinks.LinkRedirect}/>
                <meta http-equiv="pragma" content="no-cache"/>
                <meta http-equiv="expires" content="-1"/>
                //TODO: Add Status POP window implementation
            </Helmet>
            <div className="ie-fixMinHeight">
                <div className="main">
                    <div className="wrap">
                        <h1>{i18n.t<string>('authsuccess')}</h1>
                        <p className="info">{i18n.t<string>('nothinghappens')}<a
                            href={mkHotSpotData.mkLinks.LinkRedirect}> {i18n.t<string>('here')}</a></p>
                        <FooterEl/>
                    </div>
                </div>
            </div>
        </div>
    );
}