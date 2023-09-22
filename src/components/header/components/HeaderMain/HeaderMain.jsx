export const HeaderMain = () => {
  return (
    <div class="header__main main-header">
      <div class="header__overlay"></div>
      <div class="header-catalog">
        <div class="header-catalog__wrap">
          <div class="header-catalog__head">
            <div class="header-catalog__big-title">Каталог</div>
            <button class="header-catalog__close button-icon">
              <img src="img/icons/close-blue.svg" alt="" />
            </button>
          </div>
          <div data-tabs class="header-catalog__tabs">
            <div data-tabs-titles class="header-catalog__titles ">
              <button class="header-catalog__title _tab-active">
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
              <button class="header-catalog__title ">
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
              <button class="header-catalog__title ">
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
              <button class="header-catalog__title ">
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
              <button class="header-catalog__title ">
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
              <button class="header-catalog__title ">
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
              <button class="header-catalog__title ">
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
            <div class="catalog-mob">
              <div class="catalog-mob__nav">
                <div class="category-card">
                  <div class="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <div class="category-card__title">Новинки</div>
                </div>
                <div class="category-card">
                  <div class="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <div class="category-card__title">Акція, Розпродаж</div>
                </div>
                <div class="category-card">
                  <div class="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <div class="category-card__title">Все для шиття</div>
                </div>
                <div class="category-card">
                  <div class="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <div class="category-card__title">
                    Тканини і прикладні матеріали
                  </div>
                </div>
                <div class="category-card">
                  <div class="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <div class="category-card__title">
                    Блискавка, Нитка, Ґудзик
                  </div>
                </div>
                <div class="category-card">
                  <div class="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <div class="category-card__title">Ругоділля і Творчість</div>
                </div>
                <div class="category-card">
                  <div class="category-card__image-ibg">
                    <picture>
                      <source
                        srcset="img/main-img/category.webp"
                        type="image/webp"
                      />
                      <img src="img/main-img/category.png" alt="" />
                    </picture>
                  </div>
                  <div class="category-card__title">Біжутерія та ремені</div>
                </div>
              </div>
            </div>
            <div data-tabs-body class="header-catalog__content">
              <div class="header-catalog__body">
                <button class="header-catalog__back">
                  <img src="img/icons/arrow-back.svg" alt="" /> Новинки
                </button>
                <div class="header-catalog__grid-layout">
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                </div>
              </div>
              <div class="header-catalog__body">
                <button class="header-catalog__back">
                  <img src="img/icons/arrow-back.svg" alt="" /> Акція, Розпродаж
                </button>
                <div class="header-catalog__grid-layout">
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                </div>
              </div>
              <div class="header-catalog__body">
                <button class="header-catalog__back">
                  <img src="img/icons/arrow-back.svg" alt="" /> Все для шиття
                </button>
                <div class="header-catalog__grid-layout">
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                </div>
              </div>
              <div class="header-catalog__body">
                <button class="header-catalog__back">
                  <img src="img/icons/arrow-back.svg" alt="" />
                  Тканини і прикладні матеріали
                </button>
                <div class="header-catalog__grid-layout">
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                </div>
              </div>
              <div class="header-catalog__body">
                <button class="header-catalog__back">
                  <img src="img/icons/arrow-back.svg" alt="" /> Блискавка,
                  Нитка, Ґудзик
                </button>
                <div class="header-catalog__grid-layout">
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                </div>
              </div>
              <div class="header-catalog__body">
                <button class="header-catalog__back">
                  <img src="img/icons/arrow-back.svg" alt="" />
                  Ругоділля і Творчість
                </button>
                <div class="header-catalog__grid-layout">
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                </div>
              </div>
              <div class="header-catalog__body">
                <button class="header-catalog__back">
                  <img src="img/icons/arrow-back.svg" alt="" /> Біжутерія та
                  ремені
                </button>
                <div class="header-catalog__grid-layout">
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                  <a href="" class="category-card">
                    <div class="category-card__image-ibg">
                      <picture>
                        <source
                          srcset="img/main-img/category.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/category.png" alt="" />
                      </picture>
                    </div>
                    <h4 class="category-card__title">
                      2023.04 НОВИНКИ Переможного 2023 року
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="main-header__menu menu">
        <button data-close-menu class="menu__close button-icon">
          <img src="img/icons/close-blue.svg" alt="" />
        </button>
        <a href="" class="menu__logo">
          <picture>
            <source srcset="img/main-img/logo-big.webp" type="image/webp" />
            <img src="img/main-img/logo-big.png" alt="" />
          </picture>
        </a>
        <ul class="menu__main-list">
          <li>
            <a href="">
              <span class="menu__icon button-icon">
                <img src="img/icons/catalog.svg" alt="" />
              </span>
              Каталог товарів
            </a>
          </li>
          <li>
            <a href="">
              <span class="menu__icon button-icon">
                <img src="img/icons/basket.svg" alt="" />
              </span>
              Кошик
              <span class="menu__count-product">12</span>
            </a>
          </li>
        </ul>
        <div class="menu__lang">
          <div class="menu__lang-title">Мова</div>
          <ul>
            <li>
              <a href="">UKR</a>
            </li>
            <li>
              <a class="active" href="">
                RU
              </a>
            </li>
          </ul>
        </div>
        <div class="menu__info">
          <div class="menu__title">Інформація</div>
          <ul class="menu__list">
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
      <div class="main-header__container">
        <div class="main-header__row">
          <div class="main-header__left">
            <button data-open-menu class="main-header__menu">
              <img src="img/icons/menu.svg" alt="" />
            </button>
            <a href="#" class="main-header__logo">
              <picture>
                <source srcset="img/main-img/logo.webp" type="image/webp" />
                <img src="img/main-img/logo.png" alt="" />
              </picture>
            </a>
            <button class="main-header__catalog-button">
              <img src="img/icons/catalog.svg" alt="" />
              <span>Каталог товарів</span>
            </button>
            <div class="main-header__phone phone-header">
              <button
                data-phone
                class="main-header__button phone-header__button button-icon"
              >
                <img src="img/icons/phone.svg" alt="" />
              </button>
              <div class="phone-header__wrap">
                <ul class="phone-header__list">
                  <li class="phone-header__item">
                    <div class="phone-header__operator">
                      <picture>
                        <source
                          srcset="img/main-img/vodafone.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/vodafone.png" alt="" />
                      </picture>
                    </div>
                    <a href="tel:380951333412" class="phone-header__link">
                      380951333412
                    </a>
                    <div class="phone-header__socials">
                      <a href="">
                        <img src="img/icons/viber.svg" alt="" />
                      </a>
                      <a href="">
                        <img src="img/icons/telegram.svg" alt="" />
                      </a>
                    </div>
                  </li>
                  <li class="phone-header__item">
                    <div class="phone-header__operator">
                      <picture>
                        <source
                          srcset="img/main-img/kyivstar.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/kyivstar.png" alt="" />
                      </picture>
                    </div>
                    <a href="tel:380981333672" class="phone-header__link">
                      380981333672
                    </a>
                    <div class="phone-header__socials">
                      <a href="">
                        <img src="img/icons/viber.svg" alt="" />
                      </a>
                      <a href="">
                        <img src="img/icons/telegram.svg" alt="" />
                      </a>
                    </div>
                  </li>
                  <li class="phone-header__item">
                    <div class="phone-header__operator">
                      <picture>
                        <source
                          srcset="img/main-img/life.webp"
                          type="image/webp"
                        />
                        <img src="img/main-img/life.png" alt="" />
                      </picture>
                    </div>
                    <a href="tel:380731333512" class="phone-header__link">
                      380731333512
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="main-header__right">
            <div class="main-header__search search-header">
              <form action="#" class="search-header__form">
                <div class="search-header__item">
                  <span class="search-header__icon">
                    <img src="img/icons/search.svg" alt="" />
                  </span>
                  <input
                    placeholder="Пошук"
                    type="text"
                    class="search-header__input input"
                  />
                  <button class="search-header__button">Знайти</button>
                </div>
                <button class="search-header__close button-icon">
                  <img src="img/icons/close-blue.svg" alt="" />
                </button>
              </form>
            </div>
            <button class="main-header__search-open button-icon">
              <img src="img/icons/search2.svg" alt="" />
            </button>
            <a href="" class="main-header__button button-icon">
              <img src="img/icons/user.svg" alt="" />
            </a>
            <a href="" class="main-header__button button-icon">
              <img src="img/icons/basket.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
