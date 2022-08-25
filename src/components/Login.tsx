import React from 'react';
import {IMikrotikHotspotVars} from "../MikrotikVar";
import logo from '../logo.png';
import '../App.css';
import FooterEl from "./FooterEl";
import LoginFormEl from "./LoginFormEl";
import ErrorEl from "./ErrorEl";

export default function Login({mkHotSpotData}: IMikrotikHotspotVars) {
    return (
        <div className="ie-fixMinHeight">
            <div className="main">
                <div className="wrap animated fadeIn">
                    <img src={logo} className="logo" alt="logo"/>
                    <ErrorEl mkHotSpotData={mkHotSpotData}/>
                    <LoginFormEl mkHotSpotData={mkHotSpotData}/>
                    <FooterEl/>
                </div>
            </div>
        </div>
    );
}
