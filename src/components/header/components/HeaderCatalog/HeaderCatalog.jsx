import { useEffect, useState } from "react";
import "../../../../assets/initial/css/style.css";
import { CatalogBody } from "../CatalogBody/CatalogBody";
import { CatalogTitles } from "../CatalogTitles/CatalogTitles";
import { getAllCategories } from "../../../../api/categories";
import { HeaderCatalogMob } from "./components/HeaderCatalogMob";

import CloseModalIcon from "../../../../assets/initial/img/icons/close-blue.svg";
import { HeaderCatalogAlias } from "./components/HeaderCatalogAlias";

export const HeaderCatalog = ({ onClose }) => {
  const [categories, setCategories] = useState([]);
  const [alias, setAlias] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() =>{
    if (window.innerWidth < 992) {
      setIsMobile(true);
    }
    getAllCategories()
      .then(({categories}) =>{
          setCategories(categories)
          window.innerWidth > 991 && setAlias(categories ? categories[0]?.categoryAlias : '')
        })
        .catch((error) => {
          console.error('я не получил категории', error);
        })
  }, []);

  return (
    <div className="header-catalog">
      <div className="header-catalog__wrap">
        <div className="header-catalog__head">
          <div className="header-catalog__big-title">Каталог</div>
          <button
            className="header-catalog__close button-icon"
            onClick={onClose}
          >
            <img src={CloseModalIcon} alt="icon" />
          </button>
        </div>
        <div data-tabs className="header-catalog__tabs">

          <CatalogTitles setAlias={setAlias} allCategories={categories}/>

          {isMobile ? (
            <>
              {alias ? (
                  <HeaderCatalogAlias categories={categories} alias={alias} onClose={onClose} onBack={() => setAlias('')}/>
                ) : (
                  <HeaderCatalogMob categories={categories} setAlias={setAlias}/>
              )}
            </>
          ) : (
            <div data-tabs-body className="header-catalog__content">
              <CatalogBody alias={alias} onClose={onClose}/>
            </div>
          )}


        </div>
      </div>
    </div>
  );
};
