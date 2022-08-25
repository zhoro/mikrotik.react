import React from "react";
import {useTranslation} from "react-i18next";

function FooterEl() {
    const {t} = useTranslation();
    return (
        <div className="pre-footer">
            <p>{t('tech_support')}</p>
            <p>
                <span>
                    <a href={'tel:' + t('tech_support_phone')}>&#x1F4DE;{t('tech_support_phone')}</a>
                </span>
            </p>
            <p>
                <span>
                    <a href={'mail:' + t('tech_support_email')}>&#128231;{t('tech_support_email')}</a>
                </span>
            </p>
        </div>
    )
}

export default FooterEl