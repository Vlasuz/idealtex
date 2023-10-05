import React from 'react';
import {NavLink} from "react-router-dom";

const CardTitle = ({data}) => {
    return (
        <h4 className="product-card__title">
            <NavLink to={'/products/' + data?.productCode}>
                {data?.productName}
            </NavLink>
        </h4>
    );
};

export default CardTitle;