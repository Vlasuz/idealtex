import { HeaderTopStyle } from "./HeaderTop.styled";
import { useState } from "react";

import close from "../../../../assets/initial/img/icons/close.svg";
import headerSource from "../../../../assets/initial/img/main-img/header01.webp";
import headerSource2 from "../../../../assets/initial/img/main-img/header02.webp";
import headerIc from "../../../../assets/initial/img/main-img/header01.png";
import headerIc2 from "../../../../assets/initial/img/main-img/header02.png";

export const HeaderTop = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <HeaderTopStyle className="header__top top-header">
      <button
        data-close-banner
        className="top-header__close"
        onClick={handleClose}
      >
        <img src={close} alt="icon" />
      </button>
      <div className="top-header__container">
        <div className="top-header__title">
          Понеділок - Пятниця <br />
          9:00 - 18:00
        </div>
        <div className="top-header__row">
          <div className="top-header__image">
            <picture>
              <source srcSet={headerSource} type="image/webp" />
              <img src={headerIc} alt="img" />
            </picture>
          </div>
          <div className="top-header__text">
            ЗБИРАЙТЕ ВЛАСНУ КОРОБКУ ЗНИЖОК <span>ДО 45%</span>
          </div>
          <div className="top-header__image">
            <picture>
              <source srcSet={headerSource2} type="image/webp" />
              <img src={headerIc2} alt="img" />
            </picture>
          </div>
        </div>
      </div>
    </HeaderTopStyle>
  );
};
