import "../../../../assets/initial/css/style.css";

import closeBlue from "../../../../assets/initial/img/icons/close-blue.svg";
import catalog from "../../../../assets/initial/img/icons/catalog.svg";
import basket from "../../../../assets/initial/img/icons/basket.svg";

import logoBig from "../../../../assets/initial/img/main-img/logo-big.webp";
import logoBig2 from "../../../../assets/initial/img/main-img/logo-big.png";
import HeaderLanguage from "../HeaderLanguage/HeaderLanguage";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Translate from "../../../translate/Translate";

export const HeaderAside = ({onClose}) => {
    const basketProducts = useSelector(state => state.toolkit.basket)

    return (
        <aside className="main-header__menu menu">
            <button className="menu__close button-icon" onClick={onClose}>
                <img src={closeBlue} alt="icon"/>
            </button>
            <NavLink to={'/'} className="menu__logo" onClick={onClose}>
                <picture>
                    <source srcSet={logoBig} type="image/webp"/>
                    <img src={logoBig2} alt="img"/>
                </picture>
            </NavLink>
            <ul className="menu__main-list">
                <li>
                    <a href="">
            <span className="menu__icon button-icon">
              <img src={catalog} alt="icon"/>
            </span>
                      <Translate>catalog_tovarov</Translate>
                    </a>
                </li>
                <li>
                    <NavLink to={'/basket'} onClick={onClose}>
                        <span className="menu__icon button-icon">
                        <img src={basket} alt="icon"/>
                        </span>
                        <Translate>basket</Translate>
                        {basketProducts.length > 0 &&
                            <span className="menu__count-product">
                            {basketProducts.length}
                        </span>}
                    </NavLink>
                </li>
            </ul>
            <div className="menu__lang">
                <div className="menu__lang-title">
                    <Translate>language</Translate>
                </div>
                <HeaderLanguage/>
            </div>
            <div className="menu__info">
                <div className="menu__title">
                    <Translate>info_text</Translate>
                </div>
                <ul className="menu__list">
                    <li>
                        <a href="">Про нас</a>
                    </li>
                    <li>
                        <a href="">Умови роботи</a>
                    </li>
                    <li>
                        <a href="">Знижки</a>
                    </li>
                    <li>
                        <a href="">Навігація</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};
