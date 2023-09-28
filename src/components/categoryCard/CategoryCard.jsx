import React from 'react';
import {NavLink} from "react-router-dom";
import {getApiLink} from "../../hooks/getApiLink";

const CategoryCard = ({data, type}) => {
    // page-categories
    // page-home


    const isHomePageClass = (homeClass, catClass) => {
        return type === "page-home" ? homeClass : catClass
    }

    return (
        <NavLink to={'/catalog/' + data?.categoryAlias} className={isHomePageClass("category-card", "category2__item")}>
            <div className={isHomePageClass("category-card__image-ibg", "category2__image-ibg")}>
                <picture>
                    <img src={getApiLink("v1/public/images/" + data.imageName)} alt=""/>
                </picture>
            </div>
            <div className={isHomePageClass("category-card__title", "category2__text")}>
                <p>
                    {data.categoryName}
                </p>
            </div>
        </NavLink>
    );
};

export default CategoryCard;