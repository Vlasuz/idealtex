import "../../../../assets/initial/css/style.css";

import closeBlue from "../../../../assets/initial/img/icons/close-blue.svg";
import catalog from "../../../../assets/initial/img/icons/catalog.svg";
import basket from "../../../../assets/initial/img/icons/basket.svg";

import logoBig from "../../../../assets/initial/img/main-img/logo-big.webp";
import logoBig2 from "../../../../assets/initial/img/main-img/logo-big.png";

export const HeaderAside = ({ onClose }) => {
  return (
    <aside className="main-header__menu menu">
      <button
        data-close-menu
        className="menu__close button-icon"
        onClick={onClose}
      >
        <img src={closeBlue} alt="icon" />
      </button>
      <a href="" className="menu__logo">
        <picture>
          <source srcSet={logoBig} type="image/webp" />
          <img src={logoBig2} alt="img" />
        </picture>
      </a>
      <ul className="menu__main-list">
        <li>
          <a href="">
            <span className="menu__icon button-icon">
              <img src={catalog} alt="icon" />
            </span>
            Каталог товарів
          </a>
        </li>
        <li>
          <a href="">
            <span className="menu__icon button-icon">
              <img src={basket} alt="icon" />
            </span>
            Кошик
            <span className="menu__count-product">12</span>
          </a>
        </li>
      </ul>
      <div className="menu__lang">
        <div className="menu__lang-title">Мова</div>
        <ul>
          <li>
            <a href="">UKR</a>
          </li>
          <li>
            <a className="active" href="">
              RU
            </a>
          </li>
        </ul>
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
