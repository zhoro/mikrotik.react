import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import './App.css';
import logo from "./logo.png";
import {MikrotikHotspotData} from "./MikrotikVar";
import ALogin from "./components/ALogin";
import FooterEl from "./components/FooterEl";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PError from './components/PError';
import RLogin from "./components/RLogin";
import Redirect from "./components/Redirect";
import Status from "./components/Status";

function App() {
    const {t} = useTranslation();
    const [searchParams] = useSearchParams();
    const routing = searchParams.get('r');

    let mkHotspotData = new MikrotikHotspotData();
    mkHotspotData.mkClientGeneralInfo.Ip = searchParams.get('ip') ?? "";
    mkHotspotData.mkClientGeneralInfo.Username = searchParams.get('username') ?? "";
    mkHotspotData.mkClientGeneralInfo.Mac = searchParams.get('mac') ?? "";
    mkHotspotData.mkLinks.LinkAdvert = searchParams.get('linkadvert') ?? "";
    mkHotspotData.mkLinks.LinkLogin = searchParams.get('linklogin') ?? "";
    mkHotspotData.mkLinks.LinkLoginOnly = searchParams.get('linkloginonly') ?? "";
    mkHotspotData.mkLinks.LinkLogout = searchParams.get('linklogout') ?? "";
    mkHotspotData.mkLinks.LinkOrig = searchParams.get('linkorig') ?? "";
    mkHotspotData.mkLinks.LinkOrigEsc = searchParams.get('linkorigesc') ?? "";
    mkHotspotData.mkLinks.LinkRedirect = searchParams.get('linkredirect') ?? "";
    mkHotspotData.mkLinks.LinkRedirectEsc = searchParams.get('linkredirectesc') ?? "";
    mkHotspotData.mkLinks.LinkStatus = searchParams.get('linkstatus') ?? "";
    mkHotspotData.mkLinks.ServerAddress = searchParams.get('serveraddress') ?? "";
    mkHotspotData.mkLinks.MacEsc = searchParams.get('macesc') ?? "";
    mkHotspotData.mkMiscVars.ChapChallenge = searchParams.get('chapchallenge') ?? "";
    mkHotspotData.mkMiscVars.ChapId = searchParams.get('chapid') ?? "";
    mkHotspotData.mkMiscVars.Error = searchParams.get('error') ?? "";
    mkHotspotData.mkMiscVars.Blocked = searchParams.get('blocked') ?? "";
    mkHotspotData.mkTrafficCounters.BytesInNice = searchParams.get('bytesinnice') ?? "";
    mkHotspotData.mkTrafficCounters.BytesOutNice = searchParams.get('bytesoutnice') ?? "";
    mkHotspotData.mkUserStatusInfo.Blocked = searchParams.get('blocked') ?? "";
    mkHotspotData.mkUserStatusInfo.LoginBy = searchParams.get('loginby') ?? "";
    mkHotspotData.mkUserStatusInfo.LoginByMac = searchParams.get('loginbymac') ?? "";
    mkHotspotData.mkUserStatusInfo.RefreshTimeout = searchParams.get('refreshtimeout') ?? "";
    mkHotspotData.mkUserStatusInfo.SessionsTimeLeft = searchParams.get('session-time-left') ?? "";
    mkHotspotData.mkUserStatusInfo.SessionsTimeout = searchParams.get('sessiontimeout') ?? "";
    mkHotspotData.mkUserStatusInfo.Uptime = searchParams.get('uptime') ?? "";

    switch (routing) {
        case 'error':
            return <PError mkHotSpotData={mkHotspotData}/>
        case 'rlogin':
            return <RLogin mkHotSpotData={mkHotspotData}/>
        case 'alogin':
            return <ALogin mkHotSpotData={mkHotspotData}/>
        case 'redirect':
            return <Redirect mkHotSpotData={mkHotspotData}/>
        case 'login':
            return <Login mkHotSpotData={mkHotspotData}/>
        case 'logout':
            return <Logout mkHotSpotData={mkHotspotData}/>
        case 'status':
        case 'rstatus':
        case 'fstatus':
            return <Status mkHotSpotData={mkHotspotData}/>
        default:
            if (mkHotspotData.mkUserStatusInfo.LoginBy.length > 0 && mkHotspotData.mkClientGeneralInfo.Username.length > 0) {
                return <Status mkHotSpotData={mkHotspotData}/>
            } else
                return (
                    <div className="ie-fixMinHeight">
                        <div className="main">
                            <div className="wrap">
                                <img src={logo} className="logo" alt="logo"/>
                                <FooterEl/>
                            </div>
                        </div>
                    </div>
                );
    }
}

export default App;
