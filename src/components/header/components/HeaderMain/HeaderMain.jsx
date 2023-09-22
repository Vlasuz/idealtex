import { HeaderAside } from "../HeaderAside/HeaderAside";
import { HeaderCatalog } from "../HeaderCatalog/HeaderCatalog";

import menu from "../../../../assets/initial/img/icons/menu.svg";
import catalog from "../../../../assets/initial/img/icons/catalog.svg";
import phone from "../../../../assets/initial/img/icons/phone.svg";

import logo from "../../../../assets/initial/img/main-img/logo.webp";
import logo2 from "../../../../assets/initial/img/main-img/logo.png";
import vodafone from "../../../../assets/initial/img/main-img/vodafone.webp";
import vodafone2 from "../../../../assets/initial/img/main-img/vodafone.png";

export const HeaderMain = () => {
  return (
    <div className="header__main main-header">
      <div className="header__overlay"></div>

      <HeaderCatalog />

      <HeaderAside />

      <div className="main-header__container">
        <div className="main-header__row">
          <div className="main-header__left">
            <button data-open-menu className="main-header__menu">
              <img src={menu} alt="icon" />
            </button>
            <a href="#" className="main-header__logo">
              <picture>
                <source srcset={logo} type="image/webp" />
                <img src={logo2} alt="img" />
              </picture>
            </a>
            <button className="main-header__catalog-button">
              <img src={catalog} alt="icon" />
              <span>Каталог товарів</span>
            </button>
            <div className="main-header__phone phone-header">
              <button
                data-phone
                className="main-header__button phone-header__button button-icon"
              >
                <img src={phone} alt="icon" />
              </button>
              <div className="phone-header__wrap">
                <ul className="phone-header__list">
                  <li className="phone-header__item">
                    <div className="phone-header__operator">
                      <picture>
                        <source srcset={vodafone} type="image/webp" />
                        <img src={vodafone} alt="img" />
                      </picture>
                    </div>
                    <a href="tel:380951333412" className="phone-header__link">
                      380951333412
                    </a>
                    <div className="phone-header__socials">
                      <a href="">
                        <img src="img/icons/viber.svg" alt="icon" />
                      </a>
                      <a href="">
                        <img src="img/icons/telegram.svg" alt="icon" />
                      </a>
                    </div>
                  </li>
                  <li className="phone-header__item">
                    <div className="phone-header__operator">
                      <picture>
                        <source
                          srcset="img/main-img/kyivstar.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/kyivstar.png" alt="" />
                      </picture>
                    </div>
                    <a href="tel:380981333672" className="phone-header__link">
                      380981333672
                    </a>
                    <div className="phone-header__socials">
                      <a href="">
                        <img src="img/icons/viber.svg" alt="" />
                      </a>
                      <a href="">
                        <img src="img/icons/telegram.svg" alt="" />
                      </a>
                    </div>
                  </li>
                  <li className="phone-header__item">
                    <div className="phone-header__operator">
                      <picture>
                        <source
                          srcset="img/main-img/life.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/life.png" alt="" />
                      </picture>
                    </div>
                    <a href="tel:380731333512" className="phone-header__link">
                      380731333512
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main-header__right">
            <div className="main-header__search search-header">
              <form action="#" className="search-header__form">
                <div className="search-header__item">
                  <span className="search-header__icon">
                    <img src="img/icons/search.svg" alt="" />
                  </span>
                  <input
                    placeholder="Пошук"
                    type="text"
                    className="search-header__input input"
                  />
                  <button className="search-header__button">Знайти</button>
                </div>
                <button className="search-header__close button-icon">
                  <img src="img/icons/close-blue.svg" alt="" />
                </button>
              </form>
            </div>
            <button className="main-header__search-open button-icon">
              <img src="img/icons/search2.svg" alt="" />
            </button>
            <a href="" className="main-header__button button-icon">
              <img src="img/icons/user.svg" alt="" />
            </a>
            <a href="" className="main-header__button button-icon">
              <img src="img/icons/basket.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
