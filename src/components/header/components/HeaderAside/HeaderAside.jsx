import "../../../../assets/initial/css/style.css";

import closeBlue from "../../../../assets/initial/img/icons/close-blue.svg";
import catalog from "../../../../assets/initial/img/icons/catalog.svg";
import basket from "../../../../assets/initial/img/icons/basket.svg";

import logoBig from "../../../../assets/initial/img/main-img/logo-big.webp";
import logoBig2 from "../../../../assets/initial/img/main-img/logo-big.png";
import HeaderLanguage from "../HeaderLanguage/HeaderLanguage";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Translate from "../../../translate/Translate";

import userIcon from './../../../../assets/initial/img/icons/user.svg'
import orderIcon from './../../../../assets/initial/img/icons/order.svg'
import logoutIcon from './../../../../assets/initial/img/icons/logout.svg'
import {handleExit} from "../../../../functions/exitAccount";

export const HeaderAside = ({onClose}) => {
    const basketProducts = useSelector(state => state.toolkit.basket)
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.toolkit.user)

    const handleOpenCatalog = () => {
        onClose()
        document.querySelector("html").classList.add('open-catalog')
    }

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
                    <button onClick={handleOpenCatalog}>
            <span className="menu__icon button-icon">
              <img src={catalog} alt="icon"/>
            </span>
                        <Translate>catalog_tovarov</Translate>
                    </button>
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
                {!!Object.keys(userInfo).length && <li>
                    <NavLink to={"/profile"} onClick={onClose}>
                        <span className="menu__icon button-icon">
                            <img src={orderIcon} alt=""/>
                        </span>
                        Замовлення
                    </NavLink>
                </li>}
                {!!Object.keys(userInfo).length && userInfo?.role === "administrator" && <li>
                    <a href={"http://admin.idealtex.com.ua"} onClick={onClose} target={"_blank"}>
                        <span className="menu__icon button-icon">
                            <img src={userIcon} alt=""/>
                        </span>
                        Admin
                    </a>
                </li>}
                {!!Object.keys(userInfo).length && <li>
                    <button onClick={_ => handleExit(dispatch)}>
                        <span className="menu__icon button-icon">
                            <img src={logoutIcon} alt=""/>
                        </span>
                        Вийти
                    </button>
                </li>}
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
