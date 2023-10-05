import React, {useState} from 'react';
import {useGetGeneralDiscount} from "../../../hooks/getGeneralDiscount";

const CardPrice = ({productPackage, countOfProduct, isProductAuction}) => {

    const {discount} = useGetGeneralDiscount()
    const productPrice = productPackage?.productPackagePrice

    const finaleAmount = isProductAuction ? productPrice * countOfProduct : (productPrice - productPrice * (discount / 100)) * countOfProduct

    return (
        <div className="product-card__price">
            Сума: <span>{finaleAmount.toFixed(2)} грн</span>
        </div>
    );
};

export default CardPrice;