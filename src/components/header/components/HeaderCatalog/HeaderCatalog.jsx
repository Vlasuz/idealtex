import "../../../../assets/initial/css/style.css";

export const HeaderCatalog = ({ onClose }) => {
  return (
    <div className="header-catalog">
      <div className="header-catalog__wrap">
        <div className="header-catalog__head">
          <div className="header-catalog__big-title">Каталог</div>
          <button
            className="header-catalog__close button-icon"
            onClick={onClose}
          >
            <img src="img/icons/close-blue.svg" alt="" />
          </button>
        </div>
        <div data-tabs className="header-catalog__tabs">
          <div data-tabs-titles className="header-catalog__titles ">
            <button className="header-catalog__title _tab-active">
              <span> Новинки </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke-width="2" />
              </svg>
            </button>
            <button className="header-catalog__title ">
              <span> Акція, Розпродаж </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke-width="2" />
              </svg>
            </button>
            <button className="header-catalog__title ">
              <span> Все для шиття </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke-width="2" />
              </svg>
            </button>
            <button className="header-catalog__title ">
              <span> Тканини і прикладні матеріали</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke-width="2" />
              </svg>
            </button>
            <button className="header-catalog__title ">
              <span>Блискавка, Нитка, Ґудзик</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke-width="2" />
              </svg>
            </button>
            <button className="header-catalog__title ">
              <span> Ругоділля і Творчість</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke-width="2" />
              </svg>
            </button>
            <button className="header-catalog__title ">
              <span>Біжутерія та ремені</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke-width="2" />
              </svg>
            </button>
          </div>
          <div className="catalog-mob">
            <div className="catalog-mob__nav">
              <div className="category-card">
                <div className="category-card__image-ibg">
                  <picture>
                    <source
                      srcset="img/main-img/category.webp"
                      type="image/webp"
                    />
                    <img src="img/main-img/category.png" alt="" />
                  </picture>
                </div>
                <div className="category-card__title">Новинки</div>
              </div>
              <div className="category-card">
                <div className="category-card__image-ibg">
                  <picture>
                    <source
                      srcset="img/main-img/category.webp"
                      type="image/webp"
                    />
                    <img src="img/main-img/category.png" alt="" />
                  </picture>
                </div>
                <div className="category-card__title">Акція, Розпродаж</div>
              </div>
              <div className="category-card">
                <div className="category-card__image-ibg">
                  <picture>
                    <source
                      srcset="img/main-img/category.webp"
                      type="image/webp"
                    />
                    <img src="img/main-img/category.png" alt="" />
                  </picture>
                </div>
                <div className="category-card__title">Все для шиття</div>
              </div>
              <div className="category-card">
                <div className="category-card__image-ibg">
                  <picture>
                    <source
                      srcset="img/main-img/category.webp"
                      type="image/webp"
                    />
                    <img src="img/main-img/category.png" alt="" />
                  </picture>
                </div>
                <div className="category-card__title">
                  Тканини і прикладні матеріали
                </div>
              </div>
              <div className="category-card">
                <div className="category-card__image-ibg">
                  <picture>
                    <source
                      srcset="img/main-img/category.webp"
                      type="image/webp"
                    />
                    <img src="img/main-img/category.png" alt="" />
                  </picture>
                </div>
                <div className="category-card__title">
                  Блискавка, Нитка, Ґудзик
                </div>
              </div>
              <div className="category-card">
                <div className="category-card__image-ibg">
                  <picture>
                    <source
                      srcset="img/main-img/category.webp"
                      type="image/webp"
                    />
                    <img src="img/main-img/category.png" alt="" />
                  </picture>
                </div>
                <div className="category-card__title">
                  Ругоділля і Творчість
                </div>
              </div>
              <div className="category-card">
                <div className="category-card__image-ibg">
                  <picture>
                    <source
                      srcset="img/main-img/category.webp"
                      type="image/webp"
                    />
                    <img src="img/main-img/category.png" alt="" />
                  </picture>
                </div>
                <div className="category-card__title">Біжутерія та ремені</div>
              </div>
            </div>
          </div>
          <div data-tabs-body className="header-catalog__content">
            <div className="header-catalog__body">
              <button className="header-catalog__back">
                <img src="img/icons/arrow-back.svg" alt="" /> Новинки
              </button>
              <div className="header-catalog__grid-layout">
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
              </div>
            </div>
            <div className="header-catalog__body">
              <button className="header-catalog__back">
                <img src="img/icons/arrow-back.svg" alt="" /> Акція, Розпродаж
              </button>
              <div className="header-catalog__grid-layout">
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
              </div>
            </div>
            <div className="header-catalog__body">
              <button className="header-catalog__back">
                <img src="img/icons/arrow-back.svg" alt="" /> Все для шиття
              </button>
              <div className="header-catalog__grid-layout">
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
              </div>
            </div>
            <div className="header-catalog__body">
              <button className="header-catalog__back">
                <img src="img/icons/arrow-back.svg" alt="" />
                Тканини і прикладні матеріали
              </button>
              <div className="header-catalog__grid-layout">
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
              </div>
            </div>
            <div className="header-catalog__body">
              <button className="header-catalog__back">
                <img src="img/icons/arrow-back.svg" alt="" /> Блискавка, Нитка,
                Ґудзик
              </button>
              <div className="header-catalog__grid-layout">
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
              </div>
            </div>
            <div className="header-catalog__body">
              <button className="header-catalog__back">
                <img src="img/icons/arrow-back.svg" alt="" />
                Ругоділля і Творчість
              </button>
              <div className="header-catalog__grid-layout">
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
              </div>
            </div>
            <div className="header-catalog__body">
              <button className="header-catalog__back">
                <img src="img/icons/arrow-back.svg" alt="" /> Біжутерія та
                ремені
              </button>
              <div className="header-catalog__grid-layout">
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <h4 className="category-card__title">
                    2023.04 НОВИНКИ Переможного 2023 року
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
