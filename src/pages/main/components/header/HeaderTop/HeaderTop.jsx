export const HeaderTop = () => {
  return (
    <div className="header__top top-header">
      <button data-close-banner className="top-header__close">
        <img src="img/icons/close.svg" alt="icon" />
      </button>
      <div className="top-header__container">
        <div className="top-header__title">
          Понеділок - Пятниця <br />
          9:00 - 18:00
        </div>
        <div className="top-header__row">
          <div className="top-header__image">
            <picture>
              <source srcSet="img/main-img/header01.webp" type="image/webp" />
              <img src="img/main-img/header01.png" alt="" />
            </picture>
          </div>
          <div className="top-header__text">
            ЗБИРАЙТЕ ВЛАСНУ КОРОБКУ ЗНИЖОК <span>ДО 45%</span>
          </div>
          <div className="top-header__image">
            <picture>
              <source srcSet="img/main-img/header02.webp" type="image/webp" />
              <img src="img/main-img/header02.png" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
