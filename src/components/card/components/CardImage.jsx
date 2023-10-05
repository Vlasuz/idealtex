import React from 'react';
import {getApiLink} from "../../../hooks/getApiLink";
import {NavLink} from "react-router-dom";

const CardImage = ({data}) => {
    return (
        <NavLink to={'/products/' + data?.productCode} className="product-card__image-ibg">
            {
                <img src={getApiLink("v1/public/images/" + data?.imagesNames[0])} alt=""/>
            }
        </NavLink>
    );
};

export default CardImage;