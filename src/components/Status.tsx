import * as React from 'react';
import {Helmet} from "react-helmet";
import {IMikrotikHotspotVars} from "../MikrotikVar";
import FooterEl from "./FooterEl";
import StatusDetailEl from "./StatusDetailEl";
import logo from "../logo.png";
import i18next from "i18next";

export default function Status({mkHotSpotData}: IMikrotikHotspotVars) {

    function onRefresh() {
        window.open(`${mkHotSpotData.mkLinks.ServerAddress}/status.html`, '_blank', '');
        window.close();
        return false;
    }

    return (
        <div className="ALogin">
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="pragma" content="no-cache"/>
                <meta http-equiv="expires" content="-1"/>
            </Helmet>
            <div className="ie-fixMinHeight">
                <div className="main">
                    <div className="wrap">
                        <img src={logo} className="logo" alt="logo"/>
                        {/*//TODO: Add advert implementation*/}
                        <StatusDetailEl mkHotSpotData={mkHotSpotData}/>
                        <button className={'hotspotBtn'} type="button" onClick={onRefresh}>{i18next.t<string>('refresh')}</button>
                        <FooterEl/>
                    </div>
                </div>
            </div>
        </div>
    );
}