import * as React from 'react';
import {Helmet} from "react-helmet";
import {IMikrotikHotspotVars} from "../MikrotikVar";
import logo from "../logo.png";
import ErrorEl from "./ErrorEl";
import FooterEl from "./FooterEl";
import {Translation} from 'react-i18next';
import i18next from "i18next";

function PError({mkHotSpotData}: IMikrotikHotspotVars) {
    return (
        <Translation>
            {
                (t) => (
                    <div>
                        <Helmet>
                            <meta http-equiv="pragma" content="no-cache"/>
                            <meta http-equiv="expires" content="-1"/>
                        </Helmet>
                        <div className="ie-fixMinHeight">
                            <div className="main">
                                <div className="wrap animated fadeIn">
                                    <img src={logo} className="logo" alt="logo"/>
                                    <ErrorEl mkHotSpotData={mkHotSpotData}/>
                                    <div className="info">{i18next.t<string>('loginpage')}: <a
                                        href={mkHotSpotData.mkLinks.LinkLogin}>{i18next.t<string>('login')} </a>
                                    </div>
                                    <FooterEl/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Translation>
    );
}

export default PError;