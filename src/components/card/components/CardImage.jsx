import React from 'react';
import {getApiLink} from "../../../hooks/getApiLink";
import {NavLink} from "react-router-dom";

import imagePlaceholder from './../../../assets/initial/img/defaultImage.jpg'

const CardImage = ({data}) => {
    return (
        <NavLink to={'/products/' + data?.productCode} className="product-card__image-ibg">
            {
                <img src={data?.imagesNames[0] ? getApiLink("v1/public/images/" + data?.imagesNames[0]) : imagePlaceholder} alt=""/>
            }
        </NavLink>
    );
};

export default CardImage;