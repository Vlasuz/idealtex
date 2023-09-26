import { useState } from "react";
import { HeaderAside } from "../HeaderAside/HeaderAside";
import { HeaderCatalog } from "../HeaderCatalog/HeaderCatalog";
import { HeaderPhone } from "../HeaderPhone/HeaderPhone";

import menu from "../../../../assets/initial/img/icons/menu.svg";
import catalog from "../../../../assets/initial/img/icons/catalog.svg";
import phone from "../../../../assets/initial/img/icons/phone.svg";
import search from "../../../../assets/initial/img/icons/search.svg";
import search2 from "../../../../assets/initial/img/icons/search2.svg";
import user from "../../../../assets/initial/img/icons/user.svg";
import basket from "../../../../assets/initial/img/icons/basket.svg";
import closeBlue from "../../../../assets/initial/img/icons/close-blue.svg";

import logo from "../../../../assets/initial/img/main-img/logo.webp";
import logo2 from "../../../../assets/initial/img/main-img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { HeaderMainStyled } from "./HeaderMain.styled";
import { handleExit } from "../../../../functions/exitAccount";

export const HeaderMain = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.toolkit.user);

  const handleOpenAside = () => {
    setAsideOpen(true);
    document.documentElement.classList.add("menu-open");
  };

  const handleCloseAside = () => {
    setAsideOpen(false);
    document.documentElement.classList.remove("menu-open");
  };

  const handleOpenCatalog = () => {
    setCatalogOpen(true);
  };

  const handleCloseCatalog = () => {
    setCatalogOpen(false);
  };

  const handleOpenPhone = (evt) => {
    // evt.preventDefault();
    const phoneBtn = document.querySelector("[data-phone]");
    phoneBtn.parentElement.classList.toggle("_active-phone");
    setPhoneOpen(true);
  };

  return (
    <HeaderMainStyled className="header__main main-header">
      <div className="header__overlay"></div>

      {catalogOpen && <HeaderCatalog onClose={handleCloseCatalog} />}

      {asideOpen && <HeaderAside onClose={handleCloseAside} />}

      <div className="main-header__container">
        <div className="main-header__row">
          <div className="main-header__left">
            <button
              data-open-menu
              className="main-header__menu"
              onClick={handleOpenAside}
            >
              <img src={menu} alt="icon" />
            </button>

            <a href="#" className="main-header__logo">
              <picture>
                <source srcSet={logo} type="image/webp" />
                <img src={logo2} alt="img" />
              </picture>
            </a>
            <button
              className="main-header__catalog-button"
              onClick={handleOpenCatalog}
            >
              <img src={catalog} alt="icon" />
              <span>Каталог товарів</span>
            </button>
            <div className="main-header__phone phone-header">
              <button
                data-phone
                className="main-header__button phone-header__button button-icon"
                onClick={handleOpenPhone}
              >
                <img src={phone} alt="icon" />
              </button>

              {phoneOpen && <HeaderPhone />}
            </div>
          </div>
          <div className="main-header__right">
            <div className="main-header__search search-header">
              <form action="#" className="search-header__form">
                <div className="search-header__item">
                  <span className="search-header__icon">
                    <img src={search} alt="icon" />
                  </span>
                  <input
                    placeholder="Пошук"
                    type="text"
                    className="search-header__input input"
                  />
                  <button className="search-header__button">Знайти</button>
                </div>
                <button className="search-header__close button-icon">
                  <img src={closeBlue} alt="icon" />
                </button>
              </form>
            </div>
            <button className="main-header__search-open button-icon">
              <img src={search2} alt="icon" />
            </button>
            <div className="header__user">
              <a href="" className="main-header__button button-icon">
                <img src={user} alt="icon" />
              </a>
              {!!Object.keys(userInfo).length && (
                <p>
                  <span>{userInfo.firstName}</span>
                  <a href={"mailto:" + userInfo.email}>{userInfo.email}</a>
                  <button onClick={(_) => handleExit(dispatch)}>Exit</button>
                </p>
              )}
            </div>
            <a href="" className="main-header__button button-icon">
              <img src={basket} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </HeaderMainStyled>
  );
};
