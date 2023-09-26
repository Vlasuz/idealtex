import React from 'react';
import {NavLink} from "react-router-dom";
import {getApiLink} from "../../hooks/getApiLink";

const CategoryCard = ({data, type}) => {


    // Параметр type - что бы вывести определенный стиль карточек:
    //
    // 1) page-categories - как на странице "Категории"
    // 2) page-home - как на главной странице


    if (type === 'page-categories')
        return (
            <NavLink to={'/products/' + data?.categoryAlias} className="category2__item">
                <div className="category2__image-ibg">
                    <picture>
                        <img src={getApiLink("v1/public/images/" + data.imageName)} alt=""/>
                    </picture>
                </div>
                <div className="category2__text">
                    <p>
                        {data.categoryName}
                    </p>
                </div>
            </NavLink>
        );

    else if (type === 'page-home')
        return (
            <NavLink to={'/products/' + data?.categoryAlias} className="category-card">
                <div className="category-card__image-ibg">
                    <picture>
                        <img src={getApiLink("v1/public/images/" + data.imageName)} alt=""/>
                    </picture>
                </div>
                <h4 className="category-card__title">
                    {data.categoryName}
                </h4>
            </NavLink>
        )
    else return ''
};

export default CategoryCard;