import vodafone from "../../../../assets/initial/img/main-img/vodafone.webp";
import vodafone2 from "../../../../assets/initial/img/main-img/vodafone.png";
import viber from "../../../../assets/initial/img/icons/viber.svg";
import telegram from "../../../../assets/initial/img/icons/telegram.svg";
import life from "../../../../assets/initial/img/main-img/life.webp";
import life2 from "../../../../assets/initial/img/main-img/life.png";
import kyivstar from "../../../../assets/initial/img/main-img/kyivstar.webp";
import kyivstar2 from "../../../../assets/initial/img/main-img/kyivstar.png";
import axios from "axios";
import { useState } from "react";
import { getApiLink } from "../../../../hooks/getApiLink";

export const HeaderPhone = () => {
  const [vodafonePhone, setVodafone] = useState([]);
  const [kyivstarPhone, setKyivstar] = useState([]);
  const [lifecellPhone, setLifecell] = useState([]);

  axios
    .get(getApiLink('v1/public/settings/companyPhoneVodafone'))
    .then(({data}) =>{
      const phoneVodafone = data.companyPhoneVodafone;
      setVodafone(phoneVodafone);
    })
    .catch((error) => {
      console.log(error);
    })
  
  axios
    .get(getApiLink('v1/public/settings/companyPhoneKyivstar'))
    .then(({data}) =>{
      const phoneKyivstar = data.companyPhoneKyivstrar;
      setKyivstar(phoneKyivstar);
    })
    .catch((error) => {
      console.log(error);
    })

  axios
    .get(getApiLink('v1/public/settings/companyPhoneLifecell'))
    .then(({data}) =>{
      const phoneLifecell = data.companyPhoneLifecell;
      setLifecell(phoneLifecell);
    })
    .catch((error) => {
      console.log(error);
    })

  return (
    <div className="phone-header__wrap">
      <ul className="phone-header__list">
        <li className="phone-header__item">
          <div className="phone-header__operator">
            <picture>
              <source srcSet={vodafone} type="image/webp" />
              <img src={vodafone2} alt="img" />
            </picture>
          </div>
          <a href={`tel:${vodafonePhone}`} className="phone-header__link">
            {vodafonePhone}
          </a>
          <div className="phone-header__socials">
            <a href={`viber://chat/?number=%2B${vodafonePhone}`}>
              <img src={viber} alt="icon" />
            </a>
            <a href={`tg://resolve?domain=${vodafonePhone}`}>
              <img src={telegram} alt="icon" />
            </a>
          </div>
        </li>
        <li className="phone-header__item">
          <div className="phone-header__operator">
            <picture>
              <source srcSet={kyivstar} type="image/webp" />
              <img src={kyivstar2} alt="" />
            </picture>
          </div>
          <a href={`tel:${kyivstarPhone}`} className="phone-header__link">
            {kyivstarPhone}            
          </a>
          <div className="phone-header__socials">
            <a href={`viber://chat/?number=%2B${kyivstarPhone}`}>
              <img src={viber} alt="icon" />
            </a>
            <a href={`tg://resolve?domain=${kyivstarPhone}`}>
              <img src={telegram} alt="icon" />
            </a>
          </div>
        </li>
        <li className="phone-header__item">
          <div className="phone-header__operator">
            <picture>
              <source srcSet={life} type="image/webp" />
              <img src={life2} alt="img" />
            </picture>
          </div>
          <a href={`tel:${lifecellPhone}`} className="phone-header__link">
            {lifecellPhone}
          </a>
        </li>
      </ul>
    </div>
  );
};
