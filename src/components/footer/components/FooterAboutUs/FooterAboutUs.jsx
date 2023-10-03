import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { getApiLink } from '../../../../hooks/getApiLink'

import logoImg from '../../../../assets/initial/img/main-img/logo-big.webp'
import logoWeb from '../../../../assets/initial/img/main-img/logo-big.png'
import mailIc from '../../../../assets/initial/img/icons/mail.svg'
import phoneIc from '../../../../assets/initial/img/icons/phone2.svg'

export const FooterAboutUs = () => {

    const [mail, setMail] = useState([]);
    const [vodafone, setPhoneVodafone] = useState([]);
    const [kyivstar, setPhoneKyivstar] = useState([]);
    const [lifecell, setPhoneLifecell] = useState([]);

    axios
        .get(getApiLink('v1/public/settings/companyEmail'))
        .then(({data}) => {
            const mail = data.companyEmail;
            setMail(mail);
            console.log('получил почту', mail);
        })

    axios
        .get(getApiLink('v1/public/settings/companyPhoneVodafone'))
        .then(({data}) =>{
            const phoneVodafone = data.companyPhoneVodafone;
            setPhoneVodafone(phoneVodafone)
        })

    axios
        .get(getApiLink('v1/public/settings/companyPhoneKyivstar'))
        .then(({data}) =>{
            const phoneKyivstar = data.companyPhoneVodafone;
            setPhoneKyivstar(phoneKyivstar)
        })

    axios
        .get(getApiLink('v1/public/settings/companyPhoneLifecell'))
        .then(({data}) =>{
            const phoneLifecell = data.companyPhoneVodafone;
            setPhoneLifecell(phoneLifecell)
        })

    return (
        <div className="footer__column">
            <NavLink to={'/'} className="footer__logo">
                <picture>
                    <source srcSet={logoWeb} type="image/webp"/>
                    <img src={logoImg} alt="photo"/>
                </picture>
            </NavLink>
            <ul className="footer__link-list">
                <li>
                    <a href={`mailto:${mail}`}>
                        <img src={mailIc} alt="icon"/>
                        {mail}
                    </a>
                </li>
                <li>
                    <a href={`tel:${vodafone}`}>
                        <img src={phoneIc} alt="icon"/>
                        Vodafone {vodafone} (Viber)
                    </a>
                </li>
                <li>
                    <a href={`tel:${kyivstar}`}>
                        <img src={phoneIc} alt="icon"/>
                        Kyivstar {kyivstar} (Viber)
                    </a>
                </li>
                <li>
                    <a href={`tel:${lifecell}`}>
                        <img src={phoneIc} alt="icon"/>
                        Lifecell {lifecell}
                    </a>
                </li>
            </ul>
        </div>
    )
}
