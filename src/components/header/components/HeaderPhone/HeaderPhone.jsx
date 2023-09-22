import vodafone from "../../../../assets/initial/img/main-img/vodafone.webp";
import vodafone2 from "../../../../assets/initial/img/main-img/vodafone.png";
import viber from "../../../../assets/initial/img/icons/viber.svg";
import telegram from "../../../../assets/initial/img/icons/telegram.svg";
import life from "../../../../assets/initial/img/main-img/life.webp";
import life2 from "../../../../assets/initial/img/main-img/life.png";
import kyivstar from "../../../../assets/initial/img/main-img/kyivstar.webp";
import kyivstar2 from "../../../../assets/initial/img/main-img/kyivstar.png";

export const HeaderPhone = () => {
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
          <a href="tel:380951333412" className="phone-header__link">
            380951333412
          </a>
          <div className="phone-header__socials">
            <a href="">
              <img src={viber} alt="icon" />
            </a>
            <a href="">
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
          <a href="tel:380981333672" className="phone-header__link">
            380981333672
          </a>
          <div className="phone-header__socials">
            <a href="">
              <img src={viber} alt="icon" />
            </a>
            <a href="">
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
          <a href="tel:380731333512" className="phone-header__link">
            380731333512
          </a>
        </li>
      </ul>
    </div>
  );
};
