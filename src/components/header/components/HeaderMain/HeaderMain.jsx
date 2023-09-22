export const HeaderMain = () => {
  return (
    <div className="header__main main-header">
      <div className="header__overlay"></div>
      <div className="header-catalog">
        <div className="header-catalog__wrap">
          <div className="header-catalog__head">
            <div className="header-catalog__big-title">Каталог</div>
            <button className="header-catalog__close button-icon">
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
                  <div className="category-card__title">
                    Біжутерія та ремені
                  </div>
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
                  <img src="img/icons/arrow-back.svg" alt="" /> Блискавка,
                  Нитка, Ґудзик
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
      <div className="main-header__container">
        <div className="main-header__row">
          <div className="main-header__left">
            <button data-open-menu className="main-header__menu">
              <img src="img/icons/menu.svg" alt="" />
            </button>
            <a href="#" className="main-header__logo">
              <picture>
                <source srcset="img/main-img/logo.webp" type="image/webp" />
                <img src="img/main-img/logo.png" alt="" />
              </picture>
            </a>
            <button className="main-header__catalog-button">
              <img src="img/icons/catalog.svg" alt="" />
              <span>Каталог товарів</span>
            </button>
            <div className="main-header__phone phone-header">
              <button
                data-phone
                className="main-header__button phone-header__button button-icon"
              >
                <img src="img/icons/phone.svg" alt="" />
              </button>
              <div className="phone-header__wrap">
                <ul className="phone-header__list">
                  <li className="phone-header__item">
                    <div className="phone-header__operator">
                      <picture>
                        <source
                          srcset="img/main-img/vodafone.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/vodafone.png" alt="" />
                      </picture>
                    </div>
                    <a href="tel:380951333412" className="phone-header__link">
                      380951333412
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
