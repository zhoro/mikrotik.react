import React from 'react'
import i18n from "i18next";
import {useState} from 'react';
import {Translation} from "react-i18next";
import {IMikrotikHotspotVars} from "../MikrotikVar";
import {hexMD5} from "../md5";


function LoginFormEl(props: IMikrotikHotspotVars) {
    let {mkHotSpotData} = props;
    const [formData, setFormData] = useState({username: "", password: ""})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    interface FormElements extends HTMLFormControlsCollection {
        username: HTMLInputElement,
        password: HTMLInputElement,
    }

    interface LoginFormElement extends HTMLFormElement {
        readonly elements: FormElements
    }

    let handleSubmit = (e: React.FormEvent<LoginFormElement>) => {
        e.currentTarget.elements.password.value = hexMD5(mkHotSpotData.mkMiscVars.ChapId + e.currentTarget.elements.password.value + mkHotSpotData.mkMiscVars.ChapChallenge);
    }

    return (
        <Translation>
            {
                (t) => (
                    <form name="login" action={mkHotSpotData.mkLinks.LinkLoginOnly} method="post"
                          onSubmit={handleSubmit}>
                        <label>
                            <img className="ico" src="/img/user.svg" alt="#"/>
                            <input type="text" placeholder={i18n.t<string>('login')} onChange={handleChange} name="username"/>
                        </label>
                        <label>
                            <img className="ico" src="/img/password.svg" alt="#"/>
                            <input type="password" placeholder={i18n.t<string>('password')} onChange={handleChange}
                                   name="password"/>
                        </label>
                        <input type="submit" value={'' + t('connect')}/>
                    </form>
                )
            }
        </Translation>
    );
}

export default LoginFormEl