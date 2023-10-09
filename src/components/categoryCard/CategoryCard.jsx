import React from "react";
import { NavLink } from "react-router-dom";
import { getApiLink } from "../../hooks/getApiLink";

import imagePlaceholder from './../../assets/initial/img/defaultImage.jpg'

const CategoryCard = ({ data, type }) => {

  const isHomePageClass = (homeClass, catClass) => {
    return type === "page-home" ? homeClass : catClass;
  };

  return (
    <NavLink
      to={"/categories/" + data?.categoryAlias}
      className={isHomePageClass("category-card", "category2__item")}
    >
      <div
        className={isHomePageClass(
          "category-card__image-ibg",
          "category2__image-ibg"
        )}
      >
        <picture>
          <img src={data.imageName ? getApiLink("v1/public/images/" + data.imageName) : imagePlaceholder} alt="" />
        </picture>
      </div>
      <div
        className={isHomePageClass("category-card__title", "category2__text")}
      >
        <p>{data.categoryName}</p>
      </div>
    </NavLink>
  );
};

export default CategoryCard;
