import React, {useEffect, useState} from 'react';
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";

import Lang_RU from '../../../../languages/ru.json'
import Lang_UA from '../../../../languages/ua.json'
import setCookie from "../../../../functions/setCookie";
import getCookies from "../../../../functions/getCookies";
import {setLanguage} from "../../../../redux/toolkitSlice";

const jsonLanguages = {
    "ua": { translation: Lang_UA },
    "ru": { translation: Lang_RU },
}
// Инициализация:
i18n.use(initReactI18next).init({
    resources: jsonLanguages,
    lng: getCookies('lang') ?? Object.keys(jsonLanguages)[0],
    fallbackLng: getCookies('lang') ?? Object.keys(jsonLanguages)[0]
});

const HeaderLanguage = () => {
    const {i18n} = useTranslation();
    const langSelected = useSelector(state => state.toolkit.language)
    const dispatch = useDispatch()

    const languages = [
        {
            lang_title: "UKR",
            lang_slug: "ua"
        },
        {
            lang_title: "RU",
            lang_slug: "ru"
        },
    ]

    useEffect(() => {
        dispatch(setLanguage(i18n.language))
    }, [i18n.language])

    const handleSwitchLang = (e, lang) => {
        e.preventDefault()

        setCookie('lang', lang)
        i18n.changeLanguage(lang)
    }

    return (
        <ul>
            {
                languages.map(item =>
                    <li key={item.lang_slug} >
                        <a onClick={e => handleSwitchLang(e, item.lang_slug)} className={langSelected === item.lang_slug ? "active" : ""}>
                            {item.lang_title}
                        </a>
                    </li>
                )
            }
        </ul>
    )
};

export default HeaderLanguage;