import "../../../../assets/initial/css/style.css";
import { CatalogBody } from "../CatalogBody/CatalogBody";
import { CatalogTitles } from "../CatalogTitles/CatalogTitles";

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

          <CatalogTitles />
          
          <div className="catalog-mob">
            <div className="catalog-mob__nav">
              <div className="category-card">
                <div className="category-card__image-ibg">
                  <picture>
                    <source
                      srcSet="img/main-img/category.webp"
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
                      srcSet="img/main-img/category.webp"
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
                      srcSet="img/main-img/category.webp"
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
                      srcSet="img/main-img/category.webp"
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
                      srcSet="img/main-img/category.webp"
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
                      srcSet="img/main-img/category.webp"
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
                      srcSet="img/main-img/category.webp"
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

            <CatalogBody/>
            {/* <div className="header-catalog__body">
              <button className="header-catalog__back">
                <img src="img/icons/arrow-back.svg" alt="" /> Акція, Розпродаж
              </button>
              <div className="header-catalog__grid-layout">
                <a href="" className="category-card">
                  <div className="category-card__image-ibg">
                    <picture>
                      <source
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
                        srcSet="img/main-img/category.webp"
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
