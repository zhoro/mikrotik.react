import {IMikrotikHotspotVars} from "../MikrotikVar";
import logo from '../logo.png';
import '../App.css';
import {Translation} from "react-i18next";
import i18next from "i18next";
import React from "react";

export default function Logout({mkHotSpotData}: IMikrotikHotspotVars) {
    let sessiontime = <br/>
    if (mkHotSpotData.mkUserStatusInfo.SessionsTimeLeft.length > 0) {
        sessiontime = <tr>
            <td>{i18next.t<string>('remainingtime')}</td>
            <td>{mkHotSpotData.mkUserStatusInfo.SessionsTimeLeft}</td>
        </tr>
    }
    function openLogin() {
        if (window.name != 'hotspot_logout') return true;
        window.open(mkHotSpotData.mkLinks.LinkLogin, '_blank', '');
        window.close();
        return false;
    }
    return (
        <Translation>
            {
                (t) => (
                    <div className="ie-fixMinHeight">
                        <div className="main">
                            <div className="wrap">
                                <img src={logo} className="logo" alt="logo"/>
                                <h1>{i18next.t<string>('youloggedout')}</h1>
                                <table>
                                    <tr>
                                        <td>Login</td>
                                        <td>{mkHotSpotData.mkClientGeneralInfo.Username}</td>
                                    </tr>
                                    <tr>
                                        <td>{i18next.t<string>('ipaddress')}</td>
                                        <td>{mkHotSpotData.mkClientGeneralInfo.Ip}</td>
                                    </tr>
                                    <tr>
                                        <td>{i18next.t<string>('macaddress')}</td>
                                        <td>{mkHotSpotData.mkClientGeneralInfo.Mac}</td>
                                    </tr>
                                    <tr>
                                        <td>{i18next.t<string>('usagetime')}</td>
                                        <td>{mkHotSpotData.mkUserStatusInfo.Uptime}</td>
                                    </tr>
                                    {sessiontime}
                                    <tr>
                                        <td>Bytes up / down:</td>
                                        <td>{mkHotSpotData.mkTrafficCounters.BytesInNice} / {mkHotSpotData.mkTrafficCounters.BytesOutNice}</td>
                                    </tr>
                                </table>

                                <form action={mkHotSpotData.mkLinks.LinkLogin} name="login" onSubmit={openLogin}>
                                    <input type="submit" value={'' + t('connect')}/>
                                </form>
                            </div>
                        </div>
                    </div>
                )}</Translation>
    );
}
