export const HeaderAside = () => {
  return (
    <aside className="main-header__menu menu">
      <button data-close-menu className="menu__close button-icon">
        <img src="img/icons/close-blue.svg" alt="" />
      </button>
      <a href="" className="menu__logo">
        <picture>
          <source srcset="img/main-img/logo-big.webp" type="image/webp" />
          <img src="img/main-img/logo-big.png" alt="" />
        </picture>
      </a>
      <ul className="menu__main-list">
        <li>
          <a href="">
            <span className="menu__icon button-icon">
              <img src="img/icons/catalog.svg" alt="" />
            </span>
            Каталог товарів
          </a>
        </li>
        <li>
          <a href="">
            <span className="menu__icon button-icon">
              <img src="img/icons/basket.svg" alt="" />
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
