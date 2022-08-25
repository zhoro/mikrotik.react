import React from 'react'
import i18n from "i18next";
import {IMikrotikHotspotVars} from "../MikrotikVar";

function StatusDetailEl(props: IMikrotikHotspotVars) {
    let greeting;
    if (props.mkHotSpotData.mkUserStatusInfo.LoginBy == 'trial') {
        greeting = i18n.t<string>('hello') + ', ' + i18n.t<string>('guest')
    } else if (props.mkHotSpotData.mkUserStatusInfo.LoginBy != 'mac') {
        greeting = i18n.t<string>('hello') + ', ' + props.mkHotSpotData.mkClientGeneralInfo.Username
    }

    //session time left
    let session_info;
    let session_data;
    let session_time_left;
    if (props.mkHotSpotData.mkUserStatusInfo.SessionsTimeLeft.length > 0) {
        session_info = i18n.t<string>('connected') + ' / ' + i18n.t<string>('remaining')
        session_data = props.mkHotSpotData.mkUserStatusInfo.Uptime + ' / ' + props.mkHotSpotData.mkUserStatusInfo.SessionsTimeLeft
        session_time_left = <tr>
            <td> {session_info} </td>
            <td> {session_data} </td>
        </tr>
    } else {
        session_info = i18n.t<string>('connected')
        session_data = props.mkHotSpotData.mkUserStatusInfo.Uptime
        session_time_left = <tr>
            <td> {session_info} </td>
            <td> {session_data} </td>
        </tr>
    }

    //refresh timeout
    let refresh_timeout;
    if (props.mkHotSpotData.mkUserStatusInfo.RefreshTimeout.length > 0) {
        refresh_timeout = <tr>
            <td>{i18n.t<string>('statusupdate')}</td>
            <td>{props.mkHotSpotData.mkUserStatusInfo.RefreshTimeout}</td>
        </tr>
    }

    //login by mac
    let login_by_mac;
    if (props.mkHotSpotData.mkUserStatusInfo.LoginByMac != "yes") {
        login_by_mac = <input type="submit" value="Logout"/>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <form action={props.mkHotSpotData.mkLinks.LinkLogout} name="logout">
                <table>
                    <tr>
                        <td>{i18n.t<string>('ipaddress')}</td>
                        <td>{props.mkHotSpotData.mkClientGeneralInfo.Ip}</td>
                    </tr>
                    <tr>
                        <td>Bytes up / down</td>
                        <td>{props.mkHotSpotData.mkTrafficCounters.BytesInNice} / {props.mkHotSpotData.mkTrafficCounters.BytesOutNice}</td>
                    </tr>
                    {session_time_left}
                    {refresh_timeout}
                </table>
                {login_by_mac}
            </form>
        </div>
    );
}

export default StatusDetailEl