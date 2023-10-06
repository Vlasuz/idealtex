import "../../../../assets/initial/css/style.css";

import closeBlue from "../../../../assets/initial/img/icons/close-blue.svg";
import catalog from "../../../../assets/initial/img/icons/catalog.svg";
import basket from "../../../../assets/initial/img/icons/basket.svg";

import logoBig from "../../../../assets/initial/img/main-img/logo-big.webp";
import logoBig2 from "../../../../assets/initial/img/main-img/logo-big.png";
import HeaderLanguage from "../HeaderLanguage/HeaderLanguage";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const HeaderAside = ({onClose}) => {
    const basketProducts = useSelector(state => state.toolkit.basket)
    console.log(basketProducts);

    return (
        <aside className="main-header__menu menu">
            <button className="menu__close button-icon" onClick={onClose}>
                <img src={closeBlue} alt="icon"/>
            </button>
            <a href="" className="menu__logo">
                <picture>
                    <source srcSet={logoBig} type="image/webp"/>
                    <img src={logoBig2} alt="img"/>
                </picture>
            </a>
            <ul className="menu__main-list">
                <li>
                    <a href="">
            <span className="menu__icon button-icon">
              <img src={catalog} alt="icon"/>
            </span>
                      Каталог товарів
                    </a>
                </li>
                <li>
                    <NavLink to={'/basket'}>
                        <span className="menu__icon button-icon">
                        <img src={basket} alt="icon"/>
                        </span>
                        Кошик
                        {basketProducts.length > 0 &&
                            <span className="menu__count-product">
                            {basketProducts.length}
                        </span>}
                    </NavLink>
                </li>
            </ul>
            <div className="menu__lang">
                <div className="menu__lang-title">Мова</div>
                <HeaderLanguage/>
            </div>
            <div className="menu__info">
                <div className="menu__title">Інформація</div>
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
